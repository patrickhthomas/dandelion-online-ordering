import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'


const Wrapper = styled.section`
  padding-bottom: 4em;
  display: grid;
  position: relative;
  grid-gap: .5em;
  align-content: start;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
    height: ${props => props.height || 'auto'};
    overflow: visible;
  }
`
const Title = styled.h1`
  z-index: 1;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin-bottom: -.3em;
`

const Blurb = styled.p`
  z-index: 2;
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-column: 1 / 4;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 1 / 3;
  }
`

const HeroImg = styled.div`
  z-index: 1;
  grid-column: 1 / 5;
  grid-row: 1 / 5; 
  overflow: hidden;
  display: block;
  position: relative;
  margin-top: -3em;
  margin-bottom: -1em;
  img {
   position: absolute;
   filter: grayscale(100%);
  }
  ::before {
    z-index: 1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background};
    mix-blend-mode: normal;
    filter: opacity(.8);
    backdrop-filter: blur(2px);
  }
  
  @media (min-width: ${props => props.theme.responsive.small}) {
  overflow: visible;
  img {
   position: absolute;
   width: 40%;
   height: auto;
   right: 0;
   filter: grayscale(0%) blur(1px);
  }
    ::before {
    z-index: 1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background};
    mix-blend-mode: normal;
    filter: opacity(.8);
  }
  margin-top: 0em;
  margin-right: 5%;
    
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {

  img {
   position: absolute;
   width: 40%;
   height: auto;
   right: 0;
   filter: grayscale(0%) blur(0px);
   max-width: 300px;
  }
    ::before {
    z-index: 1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.background};
    mix-blend-mode: normal;
    filter: opacity(.2) blur(0);
    backdrop-filter: blur(0);
  }
  margin-top: 0em;
  margin-right: 5%;
    
  }
`



const Subtitle = styled.h2`
  z-index: 1;
  grid-column: 1 / 5;
  grid-row: 2 / 3;
  border-bottom: 0px;
`
const Tagline = styled.h3`
  z-index: 1;
  grid-column: 1 / 5;
  grid-row: 3 / 4;
`

const Hero = props => (
  <Wrapper className='overrideInView'>
    <HeroImg><img src={props.image.file.url} alt={props.alt} /></HeroImg>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Tagline>{props.tagline}</Tagline>
    <Blurb>{props.blurb}</Blurb>
  </Wrapper>
)

export default Hero
