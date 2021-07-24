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
title='first'/>
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
            