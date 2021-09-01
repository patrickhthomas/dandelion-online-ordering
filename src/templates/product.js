/** @jsx jsx */
import { useState, useEffect, useMemo } from "react"
import { Styled, jsx } from "theme-ui"
import styled from '@emotion/styled'
import Img from "gatsby-image"
import { Grid, Button, Alert, Close } from "@theme-ui/components"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Thumbnail, OptionPicker } from "./components"
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { useCartCount } from "gatsby-theme-shopify-manager"
import Footer from '../components/Footer'



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
const CartButton = styled.button`
width: 100%;
background-color: ${props => props.theme.colors.yellow};

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

  const myOptions = product.options.map(name => name)


  const count = useCartCount()

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])

 
  
  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [qty, setQty] = useState(1)
  const keys = Object.keys(variant)
  const key1 = keys[0]
  const key2 = keys[1]
  const key3 = keys[2]
  const [value1, setValue1] = useState(variant[key1])
  const [value2, setValue2] = useState(variant[key2])
  const [value3, setValue3] = useState(variant[key3])
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)

  useEffect(() => {
    const newVariant = variants.find(variant => {
      if (keys[1] !== 'shopifyId') {
        return variant[key1] === value1 && variant[key2] === value2 
      } else {
        return variant[key1] === value1
      }
      
    })

    if (variant.shopifyId !== newVariant.shopifyId) {
      setVariant(newVariant)
    }
    console.log(variant.selectedOption)
  }, [key1, key2, value1, value2, variants, variant.shopifyId])




  async function handleAddToCart() {
    try {
      await addItemToCart(variant.shopifyId, Number(qty))
      setAddedToCartMessage("Added to your cart!")
    } catch (e) {
      setAddedToCartMessage("There was a problem adding this to your cart")
    }
  }

  async function handleTest(e) {
    e.preventDefault();
    console.log(variant);
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
            <Img fluid={variant.image ? variant.image.localFile.childImageSharp.fluid : null} />
          </div>
        </div>
        <div sx={{ display: "flex", flexDirection: "column" }}>
          <Styled.h1 sx={{ mt: 0, mb: 2 }}>{product.title}</Styled.h1>
          <p dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <div>
            <Grid padding={2} columns={2}>
              
              <OptionPicker
                key={keys[0]}
                name={keys[0]}
                options={myOptions[0].values}
                selected={value1}
                onChange={event => setValue1(event.target.value)}
              />

              {keys[1] !== 'shopifyId' ? 
              <OptionPicker
                key={keys[1]}
                name={keys[1]}
                options={myOptions[1].values}
                selected={value2}
                onChange={event => setValue2(event.target.value)}
              /> : <div></div>
            }

            {keys[1] !== 'shopifyId' && keys[2] !== 'shopifyId' ? 
              <OptionPicker
                key={keys[2]}
                name={keys[2]}
                options={myOptions[2].values}
                selected={value3}
                onChange={event => setValue3(event.target.value)}
              /> : <div></div>
            }
            <div></div>
            <OptionPicker
                key={1}
                name={'Quantity'}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                selected={qty}
                onChange={event => setQty(event.target.value)}
            />

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
        <CartButton
        sx={{display: 'block', margin: '2'}}
        >{`My Cart - ${count} items`}</CartButton>    
      </Link>
        </div>
      </NewGrid>
      <Footer />
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
