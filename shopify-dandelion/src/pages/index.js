
import React from 'react'
import SEO from '../components/SEO'
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Hero from '../components/Hero'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import ContactCard from '../components/ContactCard'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { DateTime } from '../components/DateAndTime'

const IndexPage = ({ data, pageContext }) => {
  const { basePath } = pageContext
  const {
    allShopifyProduct: { nodes: products },
  } = data

    const {
    title,
    subtitle,
    heroImage,
  } = data.contentfulHero
  const tagline = data.contentfulHero.tagline.tagline
  const blurb = data.contentfulHero.blurb.blurb
  const alt = data.contentfulHero.heroImage.description
const heroImageV2 = data.contentfulHeroImage.image

    const {
    cityStateZip,
    streetNumberName,
    map,
    link,
  } = data.contentfulSection1
  const section1Title = data.contentfulSection1.title

  //establishes variables for respective daily hours
  const days = data.allContentfulDay.edges
  const isOpen = data.allContentfulDay.edges

  //establishes variables for Section 2, product previews
  const subSection1 = data.contentfulSection2.subsection1
  const subSection2 = data.contentfulSection2.subsection2

  return (
    <Layout hasHero>
      <SEO title="Home" />
      <Container>
        <Hero
          title={title}
          subtitle={subtitle}
          tagline={tagline} 
          image={heroImageV2}
          blurb={blurb}
          alt={alt}
        />
        <Section1 
          id="card"
          title={section1Title}
          days={days}
          isOpen={isOpen}
          address={streetNumberName}
          city={cityStateZip}
          map={map}
          link={link}
        />
        <Section2 
          id="card"
          title={data.contentfulSection2.title}
          subSection1Title={subSection1.title}
          subSection1Desc={subSection1.description}
          teahouseProduct={subSection1.products}
          subSection2Title={subSection2.title}
          subSection2Desc={subSection2.description}
          apothecaryProduct={subSection2.products}
          days={days}
          isOpen={isOpen}
          address={streetNumberName}
          city={cityStateZip}
          map={map}
          link={link}
        />
        <Section3 
          id="card"
          section={data.contentfulSection3}
          title={data.contentfulSection3.title}
          content={data.contentfulSection3.content}
        />
        <ContactCard 
        id="card"
        info={data.contentfulContact}/>
        <Footer />
        <DateTime></DateTime>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query allProducts {
    allShopifyProduct {
      nodes {
        title
        handle
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 290) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
    contentfulContact {
    email
    facebook
    instagram
    phoneNumber
  }
  contentfulHero {
    blurb {
      blurb
    }
    heroImage {
      file {
        url
      }
      description
    }
    title
    subtitle
    tagline {
      tagline
    }
  }
  contentfulSection1 {
    cityStateZip
    streetNumberName
    title
    map {
      file {
        url
      }
      description
    }
    link
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
  contentfulSection2 {
    title
    subsection1 {
      linkToProductPage
      title
      description {
        internal {
          content
        }
      }
      products {
        slug
        productName
        productImage {
                fixed(width: 800, height: 800) {
                  height
                  width
                  src
                  srcWebp
                }
          file {
            url
          }
          description
        }
      }
    }
    subsection2 {
      linkToProductPage
      title
      description {
        internal {
          content
        }
      }
      products {
        productName
        productImage {
                fixed(width: 800, height: 800) {
                  height
                  width
                  src
                  srcWebp
                }
          file {
            url
          }
          description
        }
      }
    }
  }
  allContentfulEvent(sort: {fields: startTime, order: ASC}) {
    edges {
      node {
        description {
          childMarkdownRemark {
            excerpt(pruneLength: 30)
          }
        }
        startTime
        endTime
        title
        image {
          file {
            url
          }
          description
        }
      }
    }
  }
  contentfulSection3 {
    title
    content {
      title
      entry {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
    }
  }
  contentfulContact {
    email
    facebook
    instagram
    phoneNumber
  }
    contentfulGallery {
    images {
      file {
        url
      }
      description
    }
  }
    contentfulHeroImage {
    image {
      file {
        url
      }
    }
  }
  }
`
