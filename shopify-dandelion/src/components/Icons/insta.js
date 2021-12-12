import React from 'react'
import styled from '@emotion/styled'

import igSrc from '../../../static/images/instagram.svg'

const IgContainer = styled.img`
max-width: 2.5em;
padding-right: 1em;
`

const igIcon = () => {
  return (
    <IgContainer src={igSrc} alt="Instagram Icon, links to Dandelion's Instagram page"/>
  )
}

export default igIcon