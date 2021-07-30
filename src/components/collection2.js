import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'
import { Link } from 'gatsby'
import Collapsible from 'react-collapsible'
import Arrow from '../components/Icons/arrow'
import PdfMenu from '../components/Pdf'
import ShopMenuType from '../components/ShopMenuType'


const Title = styled.p`
`


const Hidden = styled.div`
display: none;

`



const Product = styled.div`
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: start;
@media (min-width: ${props => props.theme.responsive.small}) {

}
@media (min-width: ${props => props.theme.responsive.large}) {
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1em;
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

    const Grid = styled.div`
    display: grid;
    grid-gap: .5em;
    `

    
    const Collection2 = props => {
        const getTitle = props.category.map(({productType}) => {
            return (
                productType
            )
        })

        var newTitle = [ ...new Set(getTitle) ];

        return (
        
<Grid> 
{newTitle.map(newTitle => 
        <Collapsible 
        key={newTitle}
        trigger={<><Title className="sectionH2">{newTitle}</Title><Arrow/></>}
        triggerClassName='trigger'
        triggerOpenedClassName='triggerOpened'
        open={false}
        >
        <Product>
        {props.category.map(({ title, handle, images, productType, i }) => 
            
                productType === newTitle ?
                

 <Link to={`/product/${handle}/`}>
                <div className="child" key={i}>

                    <Img className='thumbnail' fixed={images[0].localFile.childImageSharp.fixed} />
                
                

<ProductName>{title}</ProductName>

                </div>
                </Link>

                
                : <Hidden></Hidden>
            )}
                </Product>
                </Collapsible>
                )}
                </Grid>
 
            
            
        
        )
        }
    export default Collection2
            