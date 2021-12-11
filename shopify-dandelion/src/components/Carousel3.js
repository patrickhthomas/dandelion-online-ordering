
import React, { useState } from 'react'
import styled from "@emotion/styled"
import { Link } from 'gatsby'
import GalleryPhotos from './GalleryPhotos'
import CustomButton from './Buttons/CustomButton'

const Description = styled.p`
width: 100%;
`
const Container1 = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-gap: 2em;
@media (min-width: ${props => props.theme.responsive.small}) {
    grid-template-rows: auto auto auto;
    .second {
        justify-self: end;
    }
}
`


const Enter = styled.div`
width: 4em;
place-self: end;
transform: translate(-1em, 5em) ;
z-index: 999;
`




const Container2 = styled.div`
max-width: 100%;
display: grid;
grid-template-rows: auto auto auto;
grid-template-columns: 1fr;
@media (min-width: ${props => props.theme.responsive.medium}) {

}

.squareHeader {
    max-width: 3em;
}
`


const CustomCarousel3 = ({ alias }) => {
    
    const [size, setSize] = useState(false)
  const handleSize = () =>
    size ? setSize(false) : setSize(true)


    
    return (
        <>
        <Container1>
        <Container2>
                <Description dangerouslySetInnerHTML={{ __html: alias.description.childMarkdownRemark.html }}>
        </Description>
        <GalleryPhotos
        buttonLabel='Next'
        thumbAlias={alias}
        photoSrc={alias.images.map(photo => (
            photo.fluid.src
        ))}/>
        </Container2>

            
        </Container1>

        </>
            )
        }
        
        
        
        
        export default CustomCarousel3
        