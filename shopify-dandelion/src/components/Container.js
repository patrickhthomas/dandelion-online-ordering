import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
.visibleGrid {
  display: grid;
}
invisibleGrid {
  display: none;
}
  margin: 0 auto auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  flex-grow: 1;
  padding-top: 1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 1em 1.5em 2em;
  }
  .sectionH2 {
     border-bottom: 0px solid ${props => props.theme.colors.tertiary};
     font-size: 1.5em;
       @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.75em;
  }
  }
`

const Container = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
