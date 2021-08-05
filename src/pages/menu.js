import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ShopMenuV2 from '../components/ShopMenuV2'
import Collection from '../components/collection'
import Container from '../components/Container'
import { SEO } from '../components/SEO'
import { startCase } from 'lodash'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Footer from '../components/Footer'


const MenuPage = ({ props, data, pageContext }) => {

  const { basePath } = pageContext




  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>

        <Collection 
        data={data.collections} 
        basePath={basePath}/>
        
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
query MenuV2Query {
  collections: allShopifyCollection(filter: {}, sort: {fields: title, order: ASC}) {
    edges {
      node {
        products {
          title
          productType
          id
          handle
          descriptionHtml
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
                fixed(width: 80, height: 80) {
                  height
                  width
                  src
                  srcWebp
                }
              }
            }
          }
        }
        title
        description
      }
    }
  }
}

`


MenuPage.Layout = Layout 
export default MenuPage
