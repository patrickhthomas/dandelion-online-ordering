
import React, { useState } from 'react'
import styled from "@emotion/styled"
import CustomButton from './CustomButton'


const Next = styled.div`
&:hover {
    cursor: pointer;
}
width: 5em;
place-self: end;
@media (min-width: ${props => props.theme.responsive.small}) {
width: 10em;
}
`
const Counter = styled.div`
place-self: center;
`
const Previous = styled.div`
&:hover {
    cursor: pointer;
}
width: 5em;
place-self: start;
@media (min-width: ${props => props.theme.responsive.small}) {
width: 10em;
}
`
const Controls = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
place-self: end center;
@media (min-width: ${props => props.theme.responsive.small}) {
width: 25em;
margin-bottom: 0em;
margin-top: 1em;
}
`
const Slide = styled.img`
width: 100%;
object-fit: contain;

`
const SlideContainer = styled.div`
display: flex;
position: relative;
max-width: 100%;
max-height: 30em;
overflow: hidden;
background-color: ${props => props.theme.colors.secondary};
`

const AutoPlay = styled.div`
.fullScreen {
    display: none;
}
display: grid;


grid-template-rows: auto auto;
align-items: end center;
max-width: 100%;
height: 495px;
overflow: hidden;
background-color: ${props => props.theme.colors.black};
box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
padding: 1em;
border-radius: .2em;
margin: 1em 0em 1em 0em;
@media (min-width: ${props => props.theme.responsive.small}) {
  margin: 1em 0em 1em 0em;
  height: 40em;
}
`


const Divider = styled.div`
display: none;
@media (min-width: ${props => props.theme.responsive.small}) {
display: grid;
grid-template-columns: repeat(20, 1fr);
grid-gap: 1em;
height: .3em;
width: 100%;
border-radius: 3em;
padding-top: 1em;
}

`

const Blip = styled.div`
height: 100%;
width: 100%;
border: 1px solid ${props => props.theme.colors.highlight25};
border-radius: 3em;
`



const GalleryPhotos = ({ photoSrc }) => {

  const photos = photoSrc

    
  
const [index, setIndex] = useState(0)
  const length = photos.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const src = photos[index]



      return (

        <AutoPlay>
        <SlideContainer className="slideContainer">
        <Slide src={src} className='active'/>
        </SlideContainer>
        <Controls>
        <Previous onClick={() => handlePrevious()}>
        <CustomButton className='nextButton' label='Previous'
        />
        </Previous>
        <Counter>
            <p>{index+1}/{photos.length}</p>
        </Counter>
        <Next onClick={() => handleNext()}>
        <CustomButton className='nextButton' label='Next'
        />
        </Next>
        </Controls>
        <Divider>
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
            <Blip />
        </Divider>
        </AutoPlay>
        )
      }
      
    
      
      
      
export default GalleryPhotos
      