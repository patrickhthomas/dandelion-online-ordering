import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ShopMenuV2 from '../components/ShopMenuV2'
import Container from '../components/Container'
import { SEO } from '../components/SEO'
import { startCase } from 'lodash'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Footer from '../components/Footer'


const MenuPage = ({ props, data, pageContext }) => {

  const { basePath } = pageContext



  const first = data.first.edges
const titles = ['first', 'second']

  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
        <ShopMenuV2 
        data={data} 
        basePath={basePath}/>
        
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
query MenuV2Query {
  first: allShopifyProduct(filter: {productType: {eq: "Dandelion Teahouse Herbal Blends"}}) {
    edges {
      node {
        id
        handle
        descriptionHtml
        title
        productType
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, height: 100)
              fixed {
                height
                width
              }
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  second: allShopifyProduct(filter: {productType: {eq: "second"}}, sort: {fields: createdAt, order: ASC}) {
    edges {
      node {
        id
        handle
        descriptionHtml
        title
        productType
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
}

`


MenuPage.Layout = Layout 
export default MenuPage
