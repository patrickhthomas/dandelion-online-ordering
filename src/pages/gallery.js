import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Container from '../components/Container'
import { SEO } from '../components/SEO'
import { startCase } from 'lodash'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Footer from '../components/Footer'


const GalleryPage = ({ data, pageContext }) => {

  const { basePath } = pageContext


  //establishes variables for LooseLeaf BigCommerceProducts
  const gallery = data.contentfulGallery


  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
        <Gallery gallery={gallery} basePath={basePath}/>
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
query GalleryQuery {
  contentfulGallery {
    images {
      file {
        url
      }
      fluid(maxWidth: 600, maxHeight: 600) {
        src
      }
      description
    }
    description {
      description
      childMarkdownRemark {
        html
      }
    }
    title
  }
}


`


GalleryPage.Layout = Layout 
export default GalleryPage
