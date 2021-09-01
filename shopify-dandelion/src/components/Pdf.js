import React, { Component } from 'react'
import Pdf from '../../static/images/TeahouseMenu.pdf'
import PdfIcon from './Icons/pdfIcon'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const PdfLink = styled.a`
display: flex;
flex-flow: column nowrap;
text-align: center;
`

class PdfMenu extends Component {

  render() {

    return (
      <Link to={'/pdfMenu'} >
        <PdfLink>
          <PdfIcon/>
          <p>View the PDF Version &gt;</p>
        </PdfLink>
      </Link>
    );

  }
}

export default PdfMenu;