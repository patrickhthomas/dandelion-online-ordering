import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { TiPlusOutline } from 'react-icons/ti'
import { Link } from 'gatsby'
import Collapsible from 'react-collapsible'
import Arrow from '../components/Icons/arrow'
import PdfMenu from '../components/Pdf'
import ShopMenuType from '../components/ShopMenuType'


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
const Title = styled.h3`
`

const SubSection1 = styled.div`
max-width: 100%;
display: flex;
flex-flow: column nowrap;
padding-bottom: 2em;
h3, p {
    padding-bottom: .5em;
}

`



const Products = styled.div`
display: grid;
max-width: 100%;
padding-top: 2em;
grid-gap: .5em;


.trigger {
    border-radius: .5em;
    padding-bottom: 1em;
    padding-top: 1em;
    margin-bottom: 0em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    transition: all .5s ease;
    max-height: 4em;
    img {
        transform: rotate(0deg);
        transition: all .5s ease;
    }
    &:hover {
        transform: scale(1.01);
    }
    
    box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
    background: ${props => props.theme.colors.background};
}

.triggerOpened {
    border-radius: .5em;
    justify-content: space-between;
    padding-bottom: 1em;
    padding-top: 1em;
    margin-bottom: 1em;
    cursor: pointer;
    display: flex;
    img {
        transform: rotate(90deg);
        transition: all .5s ease;
        align-self: center;
        padding-right: .5em;
        padding-left: .5em;
    }
    box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
}
.sectionDescription {
    padding-bottom: 2em;
}

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
    
    const Top = styled.div`
    display: flex;
    justify-content: space-between;
    `
    
    
    const ShopMenu = props => {
        return (
        
        <Wrapper>
        <Top>
        <h1>Menu</h1>
        <PdfMenu/>
        </Top>
        
        <SubSection1>
        
        <Products>
<ShopMenuType 
type={props.data.first.edges}  
basePath={props.basePath}
title='First'/>
<ShopMenuType 
type={props.data.second.edges}
basePath={props.basePath}
title='Second'/>
        </Products>
            
            
            
        </SubSection1>
            
            
        </Wrapper>
        )
        }
    export default ShopMenu
            