import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


const Button = styled.button`
width: 100%;
background-color: ${props => props.theme.colors.primary};
padding: 1em;
color: ${props => props.theme.colors.background};
transition: all .2s ease-in;
box-shadow: 0px 0px 14px 5px rgba(113, 54, 186, 0.6);
max-width: 12em;
border-radius: .5em;
font-family: ${props => props.theme.fonts.header};
&:hover {
  background: ${props => props.theme.colors.highlight};
  transition: all .2s ease-in;
  transform: scale(1.05);
  cursor: pointer;
  color: ${props => props.theme.colors.background};
}
.homeSectionButtons {
  max-width: 100%;
}

`


const HeroCTAButton = props => {
  
  
  return (
    <Link className={props.className} to={props.url}>
    <Button className={props.className}>{props.label}</Button>
    </Link>
    )
  }
  
  
  export default HeroCTAButton
  