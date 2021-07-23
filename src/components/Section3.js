import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Clock from '../components/Icons/clock'
import Pin from '../components/Icons/pin'
import useIsInViewport from 'use-is-in-viewport'



const Wrapper = styled.section`
  padding-bottom: 3em;
  display: grid;
  position: relative;
  grid-gap: .5em;
 .divider{
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
    @media (min-width: ${props => props.theme.responsive.small}) {
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
`
const Title = styled.h2`
  margin-bottom: 1em;
`





const StoryPart = styled.div`
 display: grid;
 grid-gap: 0.5em;
 padding-bottom: 1em;
 justify-content: start;
 grid-template-columns: 1fr;
   @media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 2fr;
  }
p {
  padding-bottom: 1em;
  padding-top: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.yellow};
  justify-self: start;
}
p:first-child {
  padding-top: 0em;
}

 
`


const Section1 = props => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: .001 })
return (

  <Wrapper
  ref={targetRef}
  className={isInViewport ? 'isVisible' : 'isHidden'}
  >
    <Title className="sectionH2">{props.title}</Title>


    {props.content.map(({ title, entry }) => (
      <StoryPart>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: entry.childMarkdownRemark.html }}/>
      </StoryPart>
    ))}

  </Wrapper>
)}

export default Section1
