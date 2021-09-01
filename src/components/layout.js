import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import Menu from './Menu'
import { globalStyles } from '../styles/globalStyles.js'


const Root = styled.div`
  p,
  li {
    font-family: ${props => props.theme.fonts.body};
    font-size: 1em;
    line-height: 140%;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
  h1 {
    font-family: ${props => props.theme.fonts.headerBold};
    font-size: 2.5em;
    line-height: 150%;
    letter-spacing: .025em;
    text-transform: uppercase;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
  h2 {
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.75em;
    line-height: 110%;
    letter-spacing: .07em;    
    text-transform: uppercase;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
   
  }
  h3 {
    font-family: ${props => props.theme.fonts.header};
    font-size: 1.25em;
    line-height: 120%;
    text-transform: uppercase;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    padding: 0 1rem;
    color: ${props => props.theme.colors.text};
  }
  a {
    font-family: ${props => props.theme.fonts.body};
    font-size: 1em;
  }

  ul,
  li {
    list-style: none;
  }
  section {
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: auto;
  }

`

const Skip = styled.a`
  font-family: ${props => props.theme.fonts.body};
  padding: 0 1rem;
  line-height: 60px;
  background: #2867cf;
  color: white;
  z-index: 101;
  position: fixed;
  top: -100%;
  &:hover {
    text-decoration: underline;
  }
  &:focus,
  &:active,
  &:hover {
    top: 0;
  }
`

const Main = styled.div`
section {
       @media (min-width: ${props => props.theme.responsive.small}) {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 1em;
        padding: 2em;
        margin-bottom: 2em;

    }
 }

 .isVisible{
  opacity: 100%;
  animation: rainbow 2s ease;
  transition: all 0.5s ease-in 200ms;
    @media (min-width: ${props => props.theme.responsive.small}) {
     box-shadow: 0px 0px 25px rgba(113, 54, 186, 0.2);
    background-position: left 4.5em;
  }
  background: linear-gradient(90deg, #B91E23 0%, #B91E23 16.65%, #DB742E 16.66%, #DB742E 33.31%, #FFD13A 33.32%, #FFD13A 49.99%, #2F9E44 50%, #2F9E44 66.65%, #002A73 66.66%, #002A73 83.43%, #30174F 83.44%);
  background-size: 100% .2em;
  background-repeat: no-repeat;
  background-position: left 2.5em;
  transition-delay: 100ms;

}

 .isVisibleNoAnimation{
  opacity: 100%;
  transition: all 0.5s ease-in 200ms;
    @media (min-width: ${props => props.theme.responsive.small}) {
     box-shadow: 0px 0px 25px rgba(113, 54, 186, 0.2);
    background-position: left 4.5em;
  }
  background-size: 100% .2em;
  background-repeat: no-repeat;
  background-position: left 2.5em;
  transition-delay: 100ms;

}



.isHidden{
  opacity: 0%;
  transform: scale(.95);
  transition: all 1s ease-in;
  transition-delay: 300ms;
  background-size: 0% .2em;
}

.overrideInView{
  background-color: white;
}
`

const Layout = ({children, props}) => {


  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])


  return (
    <Root className="siteRoot"
>
      <div className="siteContent">
        <Skip href="#main" id="skip-navigation">
          Skip to content
        </Skip>
        <Menu />
        <Main 
        id="main">{children}
        </Main>
        
      </div>
      <Global styles={globalStyles} />
    </Root>
  )
}

export default Layout
