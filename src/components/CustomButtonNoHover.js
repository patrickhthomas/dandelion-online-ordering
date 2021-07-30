import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'


const Button = styled.button`
width: 100%;
background-color: ${props => props.theme.colors.accent001};

color: ${props => props.theme.colors.black};
transition: all .2s ease-in;
box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
max-width: 8em;
height: 2em;
align-self: end;
border-radius: .5em;
font-family: ${props => props.theme.fonts.body};
&:hover {
  background: ${props => props.theme.colors.highlight};
  transition: all .2s ease-in;
  cursor: pointer;
  color: ${props => props.theme.colors.background};
}

margin-top: -1em;


`


const CustomButtonNoHover = props => {
  
  
  return (
    <Link className={props.className} to={props.url}>
    <Button className={props.className}>{props.label}</Button>
    </Link>
    )
  }
  
  
  export default CustomButtonNoHover
  