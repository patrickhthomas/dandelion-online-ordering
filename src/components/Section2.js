import React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby"
import useIsInViewport from 'use-is-in-viewport'
import CustomButton from './CustomButton'




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
  clock {
      grid-column: 1 / 1;
  }
`
const Title = styled.h2`
`

const SubSection1 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 2em;
  h3, p {
    padding-bottom: .5em;
  }
 .foodDrinkLink {
   padding-top: 1em;
   align-self: flex-end;
   text-align: right;
   font-size: 1.2em;
   text-shadow: -2px 1px 2px rgba(113, 54, 186, 0.2);
 }
`

const SubSection2 = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 2em;
  h3, p {
    padding-bottom: .5em;
  }
 .apothecaryLink {
   padding-top: 1em;
   align-self: flex-end;
   text-align: right;
   font-size: 1.2em;
   text-shadow: -2px 1px 2px rgba(113, 54, 186, 0.2);
 }
`


const Products = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-gap: 1em;
  @media (min-width: ${props => props.theme.responsive.small}) {
    grid-gap: 1em;
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    align-items: stretch;
  }
  a {
    text-decoration: none;
  }
`

const Product = styled.div`
border-radius: 0.2em;
 display: grid;
 align-items: end;
 width: 100%;
 grid-template-columns: 1fr;
 grid-template-rows: minmax(auto 5em) minmax(auto 5em);
 overflow: hidden;
 padding-left: .5em;
 padding-right: .5em;
div {
         content: '';
         z-index: 0;
         width: 100%;
         justify-self: center;
         height 3em;
         grid-column: 1 / 3;
         grid-row: 1 / 1;
         top: 0;
         left: 0;
         background: linear-gradient(140.98deg, rgba(113, 54, 186, 0.5) 17.15%, rgba(14, 7, 24, 0.5) 59.18%, rgba(110, 38, 255, 0.5) 117.37%), radial-gradient(106.5% 85.16% at 73.56% 25.55%, rgba(113, 54, 186, 0.5) 6.86%, rgba(48, 23, 79, 0.5) 58.17%, rgba(14, 7, 24, 0.5) 96.14%);
         background-blend-mode: color-dodge, overlay;

     }
 h3 {
     width: 100%;
     z-index: 1;
     grid-column: 1 / 1;
     grid-row: 1 / 1;
     color: white;
     opacity: 100%;
     padding-top: .5em;
     padding-bottom: .5em;
     overflow: hidden;

 }
 img {
     width: 100%;
     grid-column: 1 / 1;
     grid-row: 1 / 2;
     align-self: start;
     border-radius: 1em;
 }
  @media (min-width: ${props => props.theme.responsive.small}) {
    border-radius: .5em;
    div {
      height 4em;
    }
  }
  @media (min-width: ${props => props.theme.responsive.medium}) {
    border-radius: .5em;
    flex: 1 1 0px;
    div {
      height: 3.5em;
    }
    h3 {
      padding-bottom: 0.2em;
    }
        margin-left: 1em;
  }
  @media (min-width: ${props => props.theme.responsive.large}) {
    h3 {
      padding-bottom: 1.5em;
    }
  }
`
const target = '_blank';
const rel = 'noopener' + ' ' + 'noreferrer';

const Section2 = props =>  {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: .001 })
return (

  <Wrapper
    ref={targetRef}
  className={isInViewport ? 'isVisible' : 'isHidden'}
  >
    <Title className="sectionH2">{props.title}</Title>
    <SubSection1>
      <h3>{props.subSection1Title}</h3>
      <p>{props.subSection1Desc.internal.content}</p>
      <Products>
      {props.teahouseProduct.map(({ productImage, productName, slug }) => (
        <Product>
          <img src={productImage.fixed.srcWebp}/>
        </Product> 
      ))}
      </Products>
    </SubSection1>
    <SubSection2>
      <h3>{props.subSection2Title}</h3>
      <p>{props.subSection2Desc.internal.content}</p>
      <Products>
      {props.apothecaryProduct.map(({ productImage, productName }) => (
        <Product>
          <img src={productImage.file.url}/>

        </Product>
      ))}
      </Products>
      <p className="apothecaryLink">
        <a target={target} rel={rel} href="https://www.giftsfromtheearth.com/dandelion-teahouse-apothecary/">Our sister site has even more body care products, check them out!&gt;</a>
        
      </p>
      <Link to={'/menu'}>
      <CustomButton
      label="Order online for in store pick up">
      </CustomButton>
      </Link>
    </SubSection2>

  </Wrapper>
)}

export default Section2
