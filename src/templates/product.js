/** @jsx jsx */
import { useState, useEffect, useMemo } from "react"
import { Styled, jsx } from "theme-ui"
import styled from '@emotion/styled'
import Img from "gatsby-image"
import { Grid, Button, Alert, Close } from "@theme-ui/components"
import { SEO } from "../components"
import Layout from "../components/Layout"
import { Thumbnail, OptionPicker } from "./components"
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import template from "lodash.template"
import CustomButton2 from "../components/CustomButtonNoLink"


const Huh = styled.span`
.none {
  display: none;
}
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
  const sizes = product.options.find(
    option => option.name.toLowerCase() === "size"
  ).values

    const milks = product.options[0].name === "Milk" ? product.options.find(
    option => option.name.toLowerCase() === "milk"
  ).values : ['n/a', 'n/a'];

  let display = '';

  milks === ['n/a', 'n/a'] ? display = 'none' : display = 'display';


  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])
  const images = useMemo(() => prepareVariantsImages(variants, "size"), [
    variants,
  ])

  if (images.length < 1) {
    throw new Error("Must have at least one product image!")
  }

  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [size, setSize] = useState(variant.size)
  const [milk, setMilk] = useState(variant.milk)
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)

  useEffect(() => {
    const newVariant = variants.find(variant => {
      return variant.size === size && variant.milk === milk
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
  }, [size, milk, variants, variant.shopifyId])



  async function handleAddToCart() {
    try {
      await addItemToCart(variant.shopifyId, 1)
      setAddedToCartMessage("🛒 Added to your cart!")
    } catch (e) {
      setAddedToCartMessage("There was a problem adding this to your cart")
    }
  }

  return (
    <Layout>
      <SEO title={product.title} />
      {addedToCartMessage ? (
        <Alert sx={{ mb: 4 }} variant="primary">
          {addedToCartMessage}
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
        </Alert>
      ) : null}
      <Grid gap={4} columns={2}>
        <div>
          <div
            sx={{
              border: "1px solid gray",
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
              <OptionPicker
                key="Size"
                name=" "
                options={sizes}
                selected={size}
                onChange={event => setSize(event.target.value)}
              />
            <Huh>
              <OptionPicker
                className={display}
                key="Milk"
                name=" "
                options={milks}
                selected={milk}
                onChange={event => setMilk(event.target.value)}
              />
          </Huh>
            </Grid>
          </div>
          <AnotherButton
            sx={{display: 'block', margin: '2'}}
            onClick={handleAddToCart}
            >Add to Cart</AnotherButton>
        </div>
      </Grid>
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
