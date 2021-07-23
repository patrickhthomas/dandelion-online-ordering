import React from 'react'
import styled from '@emotion/styled'
import openMenu from '../../../static/images/bars-light.svg'

const MenuIcon = styled.div`
width: 100%;
margin: 0;
display: grid;
 img {
     max-width: 3em;
     justify-self: end;
     padding-right: 1em;
     padding-top: 1em;
 }
 background: ${props => props.theme.colors.highlightLess}
 @media (min-width: ${props => props.theme.responsive.small}) {
display: none;
}
`

const MenuButton = () => {
  return (
    <MenuIcon className="menuIcon">
    <img src={openMenu}/>
    </MenuIcon>
  )
}

export default MenuButton