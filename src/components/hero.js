import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import CustomButton from "../components/CustomButton"


const Wrapper = styled.section`

  display: grid;
  position: relative;
  grid-gap: .5em;
  overflow: hidden;
  align-content: start;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);

.heroCTA {
  place-self: center;
  z-index: 10;
  margin-bottom: 2em;
  margin-top: 2em;
}
h1, h2, h3 {
    background-color: ${props => props.theme.colors.white50};
    backdrop-filter: blur(5px);
}
`
const Title = styled.h1`
  z-index: 1;
  width: auto;
`

const Blurb = styled.p`
  z-index: 2;
  margin-top: 1em;
  margin-bottom: 2em;
`

const HeroImg = styled.div`
  z-index: 1;
  grid-row: 1 / 4; 
  overflow: hidden;
  display: block;
  position: absolute;
  transform: translateY(-2em);
  img {
   position: relative;
   min-height: 300px;
   max-height: 500px;
  }
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
      img {
   position: relative;
   min-height: 300px;
   max-height: 700px;
  }
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
      img {
   position: relative;
   min-height: 300px;
   max-height: 850px;
  }
  }
`



const Subtitle = styled.h2`
  z-index: 1;

  grid-row: 2 / 3;
  border-bottom: 0px;
`
const Tagline = styled.h3`
  z-index: 1;
  grid-row: 3 / 4;
`

const Hero = props => (
  <>
  <Wrapper className='overrideInView'>
    <HeroImg><img src={props.image.file.url} alt={props.alt} /></HeroImg>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
    <Tagline>{props.tagline}</Tagline>
    <CustomButton url='/menu'className='heroCTA' label='Order Now!' />
  </Wrapper>
  <Blurb>{props.blurb}</Blurb>
  </>
)

export default Hero
