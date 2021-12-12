import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Collapsible from 'react-collapsible'
import MenuButton from './Icons/openMenu'
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useCartCount } from "gatsby-theme-shopify-manager"
import CustomButtonNoHover from './Buttons/CustomButtonNoHover'



const Nav = styled.nav`
width: 100%;
max-width: ${props => props.theme.sizes.maxWidth};
margin: 0 auto;
padding: 0 1.5em;


ul {
  display: flex;
  justify-content: stretch;
  
}

li {
  display: inline-block;
  margin-left: 1em;
  text-align: center;
  line-height: 140%;
  align-items: flex-start;
  &:first-of-type {
    position: relative;
    margin: 0;
    flex-basis: 100%;
  }
}

a {
  text-decoration: none;
  color: DarkGray;
  font-size: .8em;
  font-weight: 600;
  padding: 1em;
  padding-left: 15%;
  padding-right: 15%;
  transition: all 0.2s;
  border-radius: .2em;
  &:hover {
    color: ${props => props.theme.colors.highlight};
    background: ${props => props.theme.colors.tertiary};
    font-size: 1em;
  }
}
@media (min-width: ${props => props.theme.responsive.medium}) {
a {
  font-size: 1em;
}
}
`

const Header = styled.header`
background: ${props => props.theme.colors.white};
width: 100%;
padding: 1.5em 0;
.navSmall{
  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
  
  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    font-size: 1.2em;
    padding: 1em;
    transition: all 0.2s;
    text-align: center;
    &:hover {
      color: ${props => props.theme.colors.highlight};
      background: none;
      font-size: 1.3em;
    }
  } 
}
`

const SmallContainer = styled.div`
position: static;
z-index: 1000;
.visually-hidden {

}
.trigger {

  display: flex;
  justify-content: end;
  .menuIcon {  
    cursor: pointer; 
  }
  cursor: pointer;
}
.triggerIsOpened {
  cursor: pointer;
}
display: block;



@media (min-width: ${props => props.theme.responsive.medium}) {
display: none;
.menuIcon {
  display: none;
}
}
.noHover {
  a, button {
      &:hover {
      transform; none;
      font-size: 1.1em;
    }
  }
  &:hover {
      transform; none;
      font-size: 1.1em;
    }
}
`

const LargeContainer = styled.div`
position: static;
z-index: 1000;
.trigger {
  display: flex;
  justify-content: end;
  img {   
  }
  cursor: pointer;
}
display: none;
.menuIcon {
  display: none;
}

@media (min-width: ${props => props.theme.responsive.medium}) {
display: block;
}
`


const bars = <MenuButton/>;

const Menu = () => {
  const { menuLinks } = useSiteMetadata()

  const count = useCartCount()

  return (
    <>
    <SmallContainer>
    <Collapsible 
    trigger={bars} 
    open={false}
    className='small'
    openedClassName='small'
    triggerClassName='trigger'
    triggerOpenedClassName='triggerOpened'
    contentOuterClassName='navSmall'
    overflowWhenOpen='visible'
    >
    <Header>
    <Nav className="navSmall">
    <div>
    {menuLinks.map(link => (
      <Link to={link.slug}  key={link.name}
      
      activeStyle={{
        color: 'black', 
        fontSize: '1.2em', 
        fontWeight: '700',   
      }}>
      {link.name}
      </Link>
      
      ))}
      <Link to="/cart" 
            activeStyle={{
        color: 'black', 
        fontSize: '1.2em', 
        fontWeight: '700'}}>
        {`Cart - ${count} items`}  
      </Link>
      </div>
      </Nav>
      </Header>
      </Collapsible>
      </SmallContainer>
      <LargeContainer>
      <div >
      <Header>
      <Nav>
      <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
        <Link to={link.slug} 
        activeStyle={{
          color: 'black', 
          fontSize: '1.0em', 
          fontWeight: '700', 
          background: 'radial-gradient(.5em .5em at 50% 77%, #FFD13A 0%, #FFD13A 56.77%, #FFFFFF 58.85%)', 
          paddingBottom: '1em',  
        }}>
        {link.name}
        </Link>
        </li>
        ))}
        <li>
      <Link to="/cart"
      activeStyle={{
          color: 'black', 
          fontSize: '1em', 
          fontWeight: '700', 
          background: 'radial-gradient(.5em .5em at 50% 77%, #FFD13A 0%, #FFD13A 56.77%, #FFFFFF 58.85%)', 
          paddingBottom: '1em',  
        }}
      >
        {`Cart - ${count}    items`}  
      </Link>
        </li>
        </ul>
        </Nav>
        </Header>
        </div>
        </LargeContainer>
        </>
        )
      }
      
      export default Menu
      