/** @jsx jsx */
import { useState, useEffect, useMemo } from "react"
import { Styled, jsx } from "theme-ui"
import styled from '@emotion/styled'
import Img from "gatsby-image"
import { Grid, Button, Alert, Close } from "@theme-ui/components"
import { SEO } from "../components"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Thumbnail, OptionPicker } from "./components"
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { useCartCount } from "gatsby-theme-shopify-manager"
import template from "lodash.template"
import CustomButton2 from "../components/CustomButtonNoLink"


const Huh = styled.span`
.none {
  display: none;
}
`
const NewGrid = styled.div`
display: grid;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
grid-template-columns: 1fr 1fr;
  }

`

const NewAlert = styled.div`
width: 90%;
margin: auto;
display: flex;
flex-flow: row nowrap;
height: .5em;
`

const AnotherButton = styled.button`
width: 100%;
background-color: ${props => props.theme.colors.accent001};

color: ${props => props.theme.colors.black};
transition: all .2s ease-in;
box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
max-width: 12em;
height: 3em;
align-self: end;
border-radius: .5em;
font-family: ${props => props.theme.fonts.header};
&:hover {
  background: ${props => props.theme.colors.highlight};
  transition: all .2s ease-in;
  transform: scale(1.05);
  cursor: pointer;
  color: ${props => props.theme.colors.background};
}
.homeSectionButtons {
  max-width: 100%;
}

`

const ProductPage = ({ data: { shopifyProduct: product } }) => {


  const myVariants = product.options.map(name => name)


  const count = useCartCount()

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])


  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [myName, setMyName] = useState(variant.myName)
  const [milk, setMilk] = useState(variant.milk)
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)

  useEffect(() => {
    const newVariant = variants.find(variant => {
      return variant.myName === myName
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [myName, variants, variant.shopifyId])



  async function handleAddToCart() {
    try {
      await addItemToCart(variant.shopifyId, 1)
      setAddedToCartMessage("Added to your cart!")
    } catch (e) {
      setAddedToCartMessage("There was a problem adding this to your cart")
    }
  }

  return (
    <Layout>
      <SEO title={product.title} />
      {addedToCartMessage ? (
        <NewAlert sx={{ mb: 4 }} variant="secondary">
          <p>{addedToCartMessage}</p>
          <Close
            ml="auto"
            mr={-2}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setAddedToCartMessage(null)}
          />
        </NewAlert>
      ) : null}
      <NewGrid >
        <div>
          <div>
</div>
          <div
            sx={{
              padding: 2,
              marginBottom: 2,
            }}
          >
            <Img fluid={variant.image.localFile.childImageSharp.fluid} />
          </div>
        </div>
        <div sx={{ display: "flex", flexDirection: "column" }}>
          <Styled.h1 sx={{ mt: 0, mb: 2 }}>{product.title}</Styled.h1>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <div>
            <Grid padding={2} columns={2}>
              {myVariants.map(option => (
              <OptionPicker
                key={option.name}
                name={option.name}
                options={option.values}
                selected={myName}
                onChange={event => setMyName(event.target.myName)}
              />
              ))}

            </Grid>
          </div>
          <AnotherButton
            sx={{display: 'block', margin: '2'}}
            onClick={handleAddToCart}
            >Add to Cart</AnotherButton>
            <Link to="/cart" 
            activeStyle={{
        color: 'black', 
        fontSize: '1.2em', 
        fontWeight: '700'}}>
        {`Proceed to Checkout - ${count} items`}  
      </Link>
        </div>
      </NewGrid>
    </Layout>
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      descriptionHtml
      options {
        name
        values
      }
      variants {
        shopifyId
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 446) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
