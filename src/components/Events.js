import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Clock from '../components/Icons/clock'
import Pin from '../components/Icons/pin'
import useIsInViewport from 'use-is-in-viewport'




const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  grid-gap: 2em;
  padding-bottom: 3em;
 .divider{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
    @media (min-width: ${props => props.theme.responsive.medium}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
 }

  .location{
    width: 100%;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2em 1fr;
    grid-template-rows: auto;
  }
  .hours {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2em 1fr;
    grid-template-rows: auto;
  }
  height: ${props => props.height || 'auto'};
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
  }
  clock {
      grid-column: 1 / 1;
  }
   .moreEventsLink {
   justify-self: end;
   align-self: start;
 }
`
const Title = styled.h2`
  margin-bottom: 1em;
`


const Event = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto 10em auto;
overflow: hidden;
 .imageContainer {
   width: 100%;
   height: 100%;
   overflow: hidden;
 }
 img {
  margin: auto;
  width: 100%;
 }

 .description {
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
 }
  @media (min-width: ${props => props.theme.responsive.small}) {
   .eventTitle {
    width: 95%;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
 }
  }
`
const EventList = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2em;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-gap: 1em;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: minmax(10em, 1fr) minmax(10em, 1fr) minmax(10em, 1fr);
      grid-template-rows: 1fr;
  }
`
function ConvertDate(props) {
    let ogMonth = props.date.substring(5,7);
    var newMonth = parseInt(ogMonth, 10);
    let ogDay = props.date.substring(8,10);
    var newDay = parseInt(ogDay, 10);

    return <h2> {newMonth}.{newDay} </h2>
}


function ConvertTime(props) {
    let ogEndTime = props.end.substring(11,13);
    var simpleEndTime = parseInt(ogEndTime, 10);
    const amPmEnd = (simpleEndTime < 12 && simpleEndTime!= 12) ? 'AM' : 'PM';
    if (simpleEndTime < 12 && simpleEndTime!= 0) {
        var newEndTime = simpleEndTime;
    } else if (simpleEndTime > 12) {
        newEndTime = (simpleEndTime - 12);
    } else if (simpleEndTime = 12) {
        newEndTime = simpleEndTime;
    } else if (simpleEndTime = 0) {
        newEndTime = 12;
    }

    let ogTime = props.start.substring(11,13);
    var simpleTime = parseInt(ogTime, 10);
    const amPm = (simpleTime < 12 && simpleTime!= 12) ? 'AM' : 'PM';
    if (simpleTime < 12 && simpleTime!= 0) {
        var newTime = simpleTime;
    } else if (simpleTime > 12) {
        newTime = (simpleTime - 12);
    } else if (simpleTime = 12) {
        newTime = simpleTime;
    } else if (simpleTime = 0) {
        newTime = 12;
    }
    return <p>From { newTime }{amPm} to { newEndTime }{amPmEnd} (PST)</p>
}






const Events = props => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: .001})
return (

  <Wrapper
  ref={targetRef}
  className={isInViewport ? 'isVisible' : 'isHidden'}
  >
    <Title className="sectionH2">Events</Title>
    <EventList>
    {props.events.map(({ node }, i) => (
      <Event>
        <div>
          <ConvertDate date={node.startTime} />
          <ConvertTime start={node.startTime} end={node.endTime} />
          <h3 className="eventTitle">{node.title}</h3>
        </div>
        <div className="imageContainer">
            <img src={node.image.file.url} alt={node.image.description} />
        </div>
        <div className="description">
            <p>{node.description.childMarkdownRemark.excerpt}</p>
        </div>
      </Event>
    ))}
    </EventList>
    <div className="moreEventsLink"><p>View all upcoming events &gt;</p></div>
  </Wrapper>
)}

export default Events
