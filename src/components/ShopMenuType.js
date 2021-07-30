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
display: flex;
flex-flow: column nowrap;
grid-gap: 2em;
justify-content: start;
@media (min-width: ${props => props.theme.responsive.small}) {

}
@media (min-width: ${props => props.theme.responsive.large}) {
display: grid;
grid-template-columns: 1fr 1fr;
}
.child {
    background: ${props => props.theme.colors.fadedPurple};
    width: 100%;
    border-radius: 1em;
    box-shadow: 0px 0px 25px rgba(113, 54, 186, 0.2);
    
    margin: 0em 0em 1em 0em;
    p, h3 {
        color: white;
    }
    display: grid;
    align-items: center;
    max-width: 1060px;
    max-width: 100%;
    grid-template-columns: minMax(3em, 5em) 1fr 1fr;
    height: 100%;
    transition: all .2s ease-in-out;
    cursor: pointer;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    &:hover {
        h3 {

        
        transition: all .2s ease-in-out;
        transform: scale(1.05);
        }
        background: ${props => props.theme.colors.primary};
    }  
    
    .thumbnail {
        max-width: 5em;
    }
    `
    
    const ProductName = styled.h3`
    
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
        open={false}
        >
        
        <Product>
        {props.type.map(({ node, i }) => {
            return (
                <Link url={`/product/${node.handle}/`}>
                <div className="child" key={i}>
                
                 <Img className='thumbnail' fixed={node.images[0].localFile.childImageSharp.fixed} />
                

                <ProductName>{node.title}</ProductName>

                </div>
                </Link>
                
                )
            })}
            </Product>
            </Collapsible>

        )
        }
            
    export default ShopMenuType
            