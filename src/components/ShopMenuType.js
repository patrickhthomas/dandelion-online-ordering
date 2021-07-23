import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'
import { Link } from '../components/link'
import Collapsible from 'react-collapsible'
import Arrow from '../components/Icons/arrow'
import PdfMenu from '../components/Pdf'




const Title = styled.h3`
`






const Product = styled.div`
width: 100%;
display: grid;
grid-gap: 2em;
justify-content: start;
@media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(3em,auto) auto auto;
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-bottom: 2em;
    row-gap: 4em;
    column-gap: .5em;
}
.child {
    background: ${props => props.theme.colors.fadedPurple};
    width: 90%;
    border-radius: 1em;
    box-shadow: 0px 0px 25px rgba(113, 54, 186, 0.2);
    
    
    
    margin: auto;
    p, h3 {
        color: white;
    }
    display: grid;
    grid-template-areas: 
    "a a a"
    "b b b"
    "c c c";
    align-items: center;
    max-width: 1060px;
    max-width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: minmax(3em,auto) auto auto;
    overflow: hidden;
    height: 100%;
    transition: all .2s ease-in-out;
    cursor: pointer;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.05);
        background: ${props => props.theme.colors.primary};
        .frost {
            background: ${props => props.theme.colors.primary};
            transition: all .2s ease-in-out;
        }
    }  
    
    `
    const Description = styled.p`
    
    
    `
    const Price = styled.p`
    
    
    `
    
    const ProductName = styled.h3`
    
    `
    const ProductImage = styled.div`
    place-self: start;
    display: grid;
    grid-row: 1 / 3;
    grid-column: 1 / 4;
    img {
        width: 100%;
        margin: auto;
    }
    @media (min-width: ${props => props.theme.responsive.small}) {
        
    }
    @media (min-width: ${props => props.theme.responsive.medium}) {
        transform: translateY(0em);
    }
    `
    const Frost = styled.div`
    grid-area: c;
    display: flex;
    padding-top: 1em;
    padding-bottom: .5em;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.fadedPurple};
    backdrop-filter: blur(1em);
    transition: all .2s ease-in-out;
    `
    

    
    const ShopMenuType = props => {

        return (

        <Collapsible trigger={<><Title className="sectionH2">{props.title}</Title><Arrow/></>}
        triggerClassName='trigger'
        triggerOpenedClassName='triggerOpened'
        >
        
        <Product>
        {props.type.map(({ node, i }) => {
            return (
                <Link url={`/product/${node.handle}/`}>
                <div className="child" key={i}>
                <ProductImage>
                    <Img image={node.images[0].gatsbyImageData}/>
                </ProductImage>
                <Frost className="frost">
                <ProductName>{node.title}</ProductName>
                <Description>{node.title}</Description>
                <Price>{node.title}</Price>
                </Frost>
                </div>
                </Link>
                )
            })}
            </Product>
            </Collapsible>

        )
        }
            
    export default ShopMenuType
            