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
  one: allShopifyProduct(filter: {productType: {eq: "Dandelion Teahouse Herbal Blends"}}) {
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
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  two: allShopifyProduct(filter: {productType: {eq: "Black Tea"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  three: allShopifyProduct(filter: {productType: {eq: "Featured Drinks"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  four: allShopifyProduct(filter: {productType: {eq: "Green Tea"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  five: allShopifyProduct(filter: {productType: {eq: "Oolong Tea"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  six: allShopifyProduct(filter: {productType: {eq: "Specialty Drinks"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  seven: allShopifyProduct(filter: {productType: {eq: "Tisane (Herbal Teas)"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  eight: allShopifyProduct(filter: {productType: {eq: "White Tea"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
  nine: allShopifyProduct(filter: {productType: {eq: "Yerba Mate/Guayasa/Yaupon"}}, sort: {fields: createdAt, order: ASC}) {
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
              fixed(height: 80, width: 80) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  }
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
