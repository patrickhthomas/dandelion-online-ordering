import React from 'react'
import styled from '@emotion/styled'


const Button = styled.button`
width: 100%;
background: ${props => props.theme.colors.white};
border: .01em solid ${props => props.theme.colors.highlight};
color: ${props => props.theme.colors.black};
transition: all .2s ease-in;
box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
max-width: 12em;
height: 3em;
align-self: end;
border-radius: .2rem;
font-family: ${props => props.theme.fonts.body};
&:hover {
  background: ${props => props.theme.colors.highlight};
  transition: all .2s ease-in;
  transform: scale(1.05);
  cursor: pointer;
  color: ${props => props.theme.colors.white};
}
.homeSectionButtons {
  max-width: 100%;
}

`


const CustomButton = props => {
  
  
  return (
    
    <Button className={props.className}>{props.label}</Button>
    
    )
  }
  
  
  export default CustomButton
  