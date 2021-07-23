import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'
import { Link } from 'gatsby'
import CustomCarousel3 from '../components/Carousel3'





const Wrapper = styled.section`
display: grid;
grid-template-columns: 1fr;
max-width: 100%;
grid-gap: 2em;
padding-bottom: 3em;
.htmlContainer {
  p {
    padding: 0;
  }
}
height: ${props => props.height || 'auto'};
@media (min-width: ${props => props.theme.responsive.small}) {
  max-width: ${props => props.theme.sizes.maxWidthCentered}; 
}
a {
  text-decoration: none;
}
`
const Title = styled.h2`
`

const SubSection = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: 1fr;
grid-gap: .5em;
padding-bottom: 2em;
h3, p {
  padding-bottom: .5em;
}
  @media (min-width: ${props => props.theme.responsive.small}) {
   grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.responsive.medium}) {
   grid-template-columns: 1fr 1fr 1fr;
  }

`





  const Description = styled.p`
  
  `

  const GalleryImage = styled.div`
  display: flex;
  flex-flow: column wrap;
  img {
      width: 100%;
      border-radius: 1em;
      padding: .5em;
      height: auto;
  }
  @media (min-width: ${props => props.theme.responsive.small}) {
    img {

    }
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    img {

    }
    @media (min-width: ${props => props.theme.responsive.large}) {
      img {

      }
    }
    `

    
    
    const ShopMenu = props => (
      
      <Wrapper>
      
      <Title>{props.gallery.title}</Title>


      <CustomCarousel3
      alias = {props.gallery}
      />
          

          
          
          </Wrapper>
          )
          
          export default ShopMenu
          