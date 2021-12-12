import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import HeroCTAButton from "./Buttons/HeroCTAButton"


const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: ${props => props.theme.sizes.maxWidth};
  flex-flow: column wrap;
  overflow: hidden;
  margin-top: 1em;
h1, h2, h3 {
color: white;
}

@media screen and (min-width: ${props => props.theme.responsive.medium}) {
   margin-left: 1em;
   margin-right: 1em;
  }
   @media screen and (min-width: ${props => props.theme.responsive.medium}) {

   flex: 2;
  }

`

const WrapperP = styled.div`
  display: grid;
  position: relative;
  grid-template-area: 
  'a a a'
  'a a a'
  'a a a';
  overflow: hidden;
  height: 20em;
  align-items: center;
  justify-content: center;
  padding-bottom: em;
.heroCTA {
  grid-area: a;
  place-self: center;
  z-index: 10;


}

 @media screen and (min-width: ${props => props.theme.responsive.small}) {
   height: auto;
   flex: 1;
  }

   @media screen and (min-width: ${props => props.theme.responsive.medium}) {
   height: auto;
   flex: 1;
  }


`

const Outer = styled.div`
width: 100%;
display: flex;
flex-flow: column wrap;
 @media screen and (min-width: ${props => props.theme.responsive.small}) {
   flex-flow: row wrap;
   border-radius: 2em;
overflow: hidden;
  }
  margin-bottom: 2em;

`


const Blurb = styled.p`
  z-index: 2;
  margin-top: 1em;

`

const HeroImg = styled.div`
  z-index: 1;
  display: block;
  position: relative;
  grid-area: a;
  overflow: hidden;
  img {
    overflow: hidden;
    width: 100%;
    margin: auto;
    
  }
 @media screen and (min-width: ${props => props.theme.responsive.small}) {
   max-height: 500px;
   img {
width: 180%;
   }
  }
 @media screen and (min-width: ${props => props.theme.responsive.medium}) {
   img {
width: 100%;
max-width: 500px;
   }
  }
 @media screen and (min-width: ${props => props.theme.responsive.medium}) {
max-height: 500px;
  }
`


const Title = styled.h1`
  z-index: 2;
  width: auto;
`

const Subtitle = styled.h2`
  z-index: 2;
  border-bottom: 0px;
`
const Tagline = styled.h3`
  z-index: 2;
`


const Hero = (props) => (
  <Outer className='overrideInView'>
  <Wrapper>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Tagline>{props.tagline}</Tagline>
    <Blurb>{props.blurb}</Blurb>
    </Wrapper>
  <WrapperP>
    <HeroCTAButton url='/menu'className='heroCTA' label='Place an order online!' />
    <HeroImg><img src={props.image.file.url} alt={props.alt} /></HeroImg>
    
  </WrapperP>
  
  </Outer>
)

export default Hero
