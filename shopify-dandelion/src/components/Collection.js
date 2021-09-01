import React from 'react'

import styled from '@emotion/styled'

import PdfMenu from './Pdf'
import Collection2 from './Collection2'


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
grid-gap: 3em;

.sectionH2 {
    font-size: 1em;
    transform: translateY(.2em);
    }
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
        width: 2em;
        height: 2em;
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
    padding-top: 1em;

    margin-bottom: 1em;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    img {
        transform: rotate(90deg) translate(-.8em, 10px);
        transition: all .5s ease;
        align-self: center;
        padding-right: 0em;
        padding-left: .5em;
        width: 2em;
        height: 2em;
    }
    box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
}
@media (min-width: ${props => props.theme.responsive.small}) {
.sectionH2 {
    font-size: 1.2em;
    transform: translateY(.1em);
    }
}
@media (min-width: ${props => props.theme.responsive.medium}) {
.sectionH2 {
    font-size: 1.7em;
    transform: translateY(0em);
    }
}
`

    
    const Top = styled.div`
    display: flex;
    justify-content: space-between;
    `
    
    const Collection = (props) => {


        return (
        
        <Wrapper>
        <Top>
        <h1>Menu</h1>
        <PdfMenu/>
        </Top>
        
        <SubSection1>
        
        <Products>


        {props.data.edges.map(({ node, i }) => {
            return (
 
                <div key={i}>
                    <h2>{node.title}</h2>
                    <p>{node.description}</p>
                    <Collection2 
                    category={node.products}
                    ></Collection2>
                
                



                </div>
                
                )
            })}

        </Products>
            
            
            
        </SubSection1>
            
            
        </Wrapper>
        )
        }
    export default Collection
            