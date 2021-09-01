import React from 'react'
import styled from '@emotion/styled'
import useIsInViewport from 'use-is-in-viewport'
import FbIcon from '../components/Icons/fb'
import IgIcon from '../components/Icons/insta'
import ContactForm from '../components/ContactForm'


const Wrapper = styled.section`
max-width: ${props => props.theme.sizes.maxWidthCentered};
padding-bottom: 3em;
display: grid;
grid-gap: 1.5em;
flex-direction: column;
@media (min-width: ${props => props.theme.responsive.small}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
    height: ${props => props.height || 'auto'};
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    max-width: ${props => props.theme.sizes.maxWidthCentered}; 
    height: ${props => props.height || 'auto'};
}
div {
    display: grid;
    grid-gap: 2em;
    padding-top: 1em;
    max-width: ${props => props.theme.sizes.maxWidthCentered};
    margin: auto;
}
`


const Subtitle = styled.h2`
z-index: 1;

`
const ContactLine = styled.h3`
z-index: 1;
a{
    display: flex;
    flex-flow: row nowrap;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    &:hover {
        color: ${props => props.theme.colors.highlight};
    }
}

`

const ContactPageCard = props => {
    const [isInViewport, targetRef] = useIsInViewport({ threshold: .001})
    return (
        
        <Wrapper
        className='container'
        >
        <ContactForm />
        <div className="grid">
        <ContactLine><a href={"mailto:" + props.info.email}>{props.info.email}</a></ContactLine>
        <ContactLine>{props.info.phoneNumber}</ContactLine>
        <ContactLine><a target="_blank" rel="noopener noreferrer" href={props.info.instagram}>{<IgIcon/>}<p>Instagram</p></a></ContactLine>
        <ContactLine><a target="_blank" rel="noopener noreferrer" href={props.info.facebook}>{<FbIcon/>}<p>Facebook</p></a></ContactLine>
        </div>
        </Wrapper>
        )}
        
        export default ContactPageCard
        