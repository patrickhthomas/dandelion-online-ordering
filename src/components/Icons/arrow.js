import React from 'react'
import styled from '@emotion/styled'
import arrowIcon from '../../../static/images/arrow-right.svg'

const ArrowImg = styled.img`
max-width: 2.5em;
padding-right: 1em;
`

const arrow = () => {
  return (
    <ArrowImg src={arrowIcon}/>
  )
}

export default arrow