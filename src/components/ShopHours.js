import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Collapsible from 'react-collapsible'
import { jsx } from 'theme-ui'


const ShopHours = props =>  {


const Close = styled.button`
box-shadow: ${props => props.theme.shadows.button};
z-index: 10;
grid-area: a;
height: 3em;
width: 6em;
place-self: end;
border-radius: 5em;
transition: .5s all ease;
&:hover {
  ${props => props.theme.hover.button};
}
`
const Hours = styled.ul`
grid-area: a;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto;
grid-gap: 1em;
grid-column: 1 / 3;
`
const Day = styled.li`

display: grid;
justify-content: start;
grid-template-columns: 1fr 1fr;
transition: 1s ease all;
@media (min-width: ${props => props.theme.responsive.small}) {
  grid-template-columns: 1fr 1fr;
}
p{
  color: white;
  padding: 0;
  border-bottom: 1px solid ${props => props.theme.colors.yellow};
}


`

const [newClassName, setNewClassName] = useState('grid')

const Alert = styled.div`
display: ${newClassName};
grid-template-areas: 'a';
padding: 2em;
background-color: ${props => props.theme.colors.accent002};
width: 100%;
margin-bottom: 2em;
border-radius: 1em;
h3 {
  color: white;
}
.trigger, .triggerOpened {
  display: flex;
}
.trigger {
  .downArrow {
    transform: rotate(270deg);
  }
}
.downArrow {
  transform: scaleX(-1);
  width: 1em;
  height: 1em;
  margin: 0;
  padding: 0;
  place-self: center;
  &:hover {
    cursor: pointer;
  }
}
.inner {
  display: grid;
  grid-template-areas: 'a a';
}
`

async function handleDismiss(e) {
    e.preventDefault();
    setNewClassName('none');
  }

  return (
    

    <Alert
    sx={{display: 'none'}}>
    <Collapsible
contentInnerClassName='inner'
                    key='huh'
                    trigger={<><h3>Be sure to check our hours prior to ordering!</h3><h3 className='downArrow'>&#9660;</h3></>}
                    triggerClassName='trigger'
                    triggerOpenedClassName='triggerOpened'
                    open={false}>
    <Close onClick={handleDismiss}><p>dismiss</p></Close>
    <Hours>
    
    {props.days.map(({ node }, i) => (
      <Day>
      {node.dayOfWeek != null && node.areYouOpen === true &&
        <>
        <p>{node.dayOfWeek}</p>
        <p>{node.openTime} to {node.closeTime}</p>
        </>}
        {node.dayOfWeek != null && node.areYouOpen === false && 
          <>
          <p>{node.dayOfWeek}</p>
          <p>Closed</p>
          </>}
          </Day>
          ))}
          </Hours>
          </Collapsible>
          </Alert>
          )
        }
        
        export default ShopHours
        