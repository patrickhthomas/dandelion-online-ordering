import React from 'react'
import styled from '@emotion/styled'

import fbSrc from '../../../static/images/facebook.svg'

const FbContainer = styled.img`
max-width: 2.5em;
padding-right: 1em;
`

const fbIcon = () => {
  return (
    <FbContainer src={fbSrc}/>
  )
}

export default fbIcon