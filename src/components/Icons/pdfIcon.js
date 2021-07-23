import React from 'react'
import styled from '@emotion/styled'
import pdfIconSrc from '../../../static/images/file-pdf-regular.svg'

const Icon = styled.img`
max-width: 2.5em;
margin: auto;
padding-bottom: .5em;
`

const PdfIcon = () => {
  return (
    <Icon src={pdfIconSrc}/>
  )
}

export default PdfIcon