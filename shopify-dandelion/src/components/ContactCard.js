import React from 'react'
import styled from '@emotion/styled'
import useIsInViewport from 'use-is-in-viewport'
import FbIcon from '../components/Icons/fb'
import IgIcon from '../components/Icons/insta'


const Wrapper = styled.section`
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
}

.email {
  font-size: 1em;
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
  div {
    display: grid;
    grid-template-columns: 2em auto;
    width: 100%;
  }
}

`

const ContactCard = (props) => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: .001})
  return (
    
    <Wrapper
    ref={targetRef}
    className={isInViewport ? 'isVisible' : 'isHidden'}
    >
    <Subtitle>Contact us</Subtitle>
    <div className="grid">
    <ContactLine className="email"><a href={"mailto:" + props.info.email}>{props.info.email}</a></ContactLine>
    <ContactLine>{props.info.phoneNumber}</ContactLine>
    <ContactLine>
    
    <a target="_blank" rel="noopener noreferrer" href={props.info.instagram}>
    <div>
    {<IgIcon/>}<p>Instagram</p>
    </div>
    </a>
    </ContactLine>
    <ContactLine>
    <a target="_blank" rel="noopener noreferrer" href={props.info.facebook}>
    <div>
    {<FbIcon/>}
    <p>Facebook</p>
    </div>
    </a>
    </ContactLine>
    </div>
    </Wrapper>
    )}
    
    export default ContactCard
    