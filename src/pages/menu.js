import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Collection from '../components/Collection'
import Container from '../components/Container'
import { SEO } from '../components/SEO'
import { startCase } from 'lodash'
import ShopHours from '../components/ShopHours'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Footer from '../components/Footer'

  //establishes variables for respective daily hours

const MenuPage = ({ props, data, pageContext }) => {

  const { basePath } = pageContext
  const days = data.allContentfulDay.edges
  const isOpen = data.allContentfulDay.edges



  return (
    <Layout>
      <SEO title={startCase(basePath)}/>
      <Container>
        <ShopHours
        days={days}
        isOpen={isOpen}
        />

        <Collection 
        data={data.collections} 
        basePath={basePath}
        days={days}
        isOpen={isOpen}
        />
        
        
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
  allContentfulDay(sort: {fields: tag, order: ASC}) {
    edges {
      node {
        dayOfWeek
        closeTime
        areYouOpen
        openTime
      }
    }
  }
}

`


MenuPage.Layout = Layout 
export default MenuPage
