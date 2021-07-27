import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'
import { Link } from '../components/link'
import Collapsible from 'react-collapsible'
import Arrow from '../components/Icons/arrow'
import PdfMenu from '../components/Pdf'




const Title = styled.p`
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
  
    const Price = styled.p`
    
    
    `
    
    const ProductName = styled.h3`
    
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
        const getTitle = props.type.map(({node}) => {
            return (
                node.productType
            )
        })

        const newTitle = getTitle[0]
        return (

        <Collapsible trigger={<><Title className="sectionH2">{newTitle}</Title><Arrow/></>}
        triggerClassName='trigger'
        triggerOpenedClassName='triggerOpened'
        open={true}
        >
        
        <Product>
        {props.type.map(({ node, i }) => {
            return (
                <Link url={`/product/${node.handle}/`}>
                <div className="child" key={i}>
                
                 <Img fluid={node.images[0].localFile.childImageSharp.fluid} />
                
                <Frost className="frost">
                <ProductName>{node.title}</ProductName>
                <Price>${node.priceRange.minVariantPrice.amount} and up</Price>
                <Price>or ${node.priceRange.maxVariantPrice.amount} packaged</Price>
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
            