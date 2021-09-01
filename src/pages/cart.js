/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { Grid, Divider, Button, Card, Text } from "@theme-ui/components"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from "gatsby"
import Footer from '../components/Footer'
import useIsInViewport from 'use-is-in-viewport'
import CustomButton from "../components/CustomButtonNoLink"
import CustomButton2 from "../components/CustomButton"

import {
  useAddItemToCart,
  useCartItems,
  useCheckoutUrl,
  useCart,
  useUpdateItemQuantity,
} from "gatsby-theme-shopify-manager"
const Wrapper = styled.div`
margin: auto;
padding-bottom: 3em;
padding-top: 1em;
margin-top: 3em;
display: grid;
position: relative;
border-radius: 1em;
grid-gap: .5em;
height: ${props => props.height || 'auto'};
@media (min-width: ${props => props.theme.responsive.small}) {
  max-width: ${props => props.theme.sizes.maxWidthCentered}; 
}
.checkoutButtonContainer {
  display: grid;
  width: 100%;
}
`

const EmptyCartWrapper = styled.div`
margin: auto;
padding-bottom: 3em;
padding-top: 1em;
margin-top: 3em;
position: relative;
border-radius: 1em;
height: ${props => props.height || 'auto'};
@media (min-width: ${props => props.theme.responsive.small}) {
  max-width: ${props => props.theme.sizes.maxWidthCentered}; 
}
.getShoppin {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 1em;
}

`

const CheckoutButton = styled.button`
width: 100%;
background-color: ${props => props.theme.colors.yellow};

color: ${props => props.theme.colors.black};
transition: all .2s ease-in;
box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
max-width: 12em;
height: 3em;
justify-self: center;
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
const GetShoppinButton = styled.button`
width: 100%;
background-color: ${props => props.theme.colors.yellow};

color: ${props => props.theme.colors.black};
transition: all .2s ease-in;
box-shadow: 0px 0px 10px rgba(113, 54, 186, 0.2);
max-width: 12em;
height: 3em;
justify-self: center;
border-radius: .5em;
padding: 1em;
padding-left: 2em;
padding-right: 2em;
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
const RemoveButton = styled.button`
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
  box-shadow: 0px 0px 10px rgba(180, 28, 33, .5)
;
  transition: all .2s ease-in;
  transform: scale(1.05);
  cursor: pointer;
  color: rgba(180, 28, 33, 1);
}
.homeSectionButtons {
  max-width: 100%;
}
`

const CartPage = () => {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: .001 })
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)

  const lineItems = useCartItems()
  const updateItemQuantity = useUpdateItemQuantity()
  const checkoutUrl = useCheckoutUrl()
  console.log(checkoutUrl)
  const cart = useCart()
  const { tax, total } = getCartTotals(cart)
  const addItemToCart = useAddItemToCart()

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getCartTotals(cart) {
    if (cart == null) {
      return { tax: "-", total: "-" }
    }

    const tax = cart.totalTaxV2
      ? `$${Number(cart.totalTaxV2.amount).toFixed(2)}`
      : "-"
    const total = cart.totalPriceV2
      ? `$${Number(cart.totalPriceV2.amount).toFixed(2)}`
      : "-"

    return {
      tax,
      total,
    }
  }

  async function removeFromCart(variantId) {
    try {
      await updateItemQuantity(variantId, 0)
    } catch (e) {
      console.log(e)
    }
  }

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid
    }
    return null
  }

  const LineItem = ({ item }) => (
    <div
      sx={{
        paddingTop: '32px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: "grid",
        gridGap: "15px",
        gridTemplateColumns: "3em 1fr 1fr",
        alignItems: "start",
      }}
    >
      <div>
        <div sx={{ padding: 1, alignSelf: 'start'}}>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div>
        <Link
          to={`/product/${getHandleForVariant(item.variant.id)}`}
          sx={{ fontSize: 3, m: 0, fontWeight: 700 }}
        >
          {item.title}
        </Link>
        <div sx={{ mt: 2, mb: 2, ml: -3, padding: 0, listStyle: "none" }}>
          {item.variant.selectedOptions.map(({ name, value }) => (
            <p key={name}>
              <strong>{name}: </strong>
              {value}
            </p>
          ))}
          <li key="quantity">
            <strong>qty: </strong>
            {item.quantity}
          </li>
        </div>
      </div>
      <div>
      <p
        sx={{
          fontSize: 4,
          fontWeight: 700,
          marginLeft: "auto",
          display: 'grid',
          gridTemplateRows: '1fr 1fr',

        }}
      >
        ${Number(item.variant.priceV2.amount).toFixed(2)}
      </p>
      <RemoveButton 
      sx={{
        placeSelf: 'end',
        backgroundColor: 'white',
        border: 3,
        cursor: 'pointer',
        

      }}
      label='Remove'
      variant="link" onClick={() => removeFromCart(item.variant.id)}>
      <h4>Remove from cart</h4>
      </RemoveButton>

      </div>
    </div>
  )

  const emptyCart = (
    <Layout>
      <SEO title="Cart" />
        <EmptyCartWrapper
      ref={targetRef}
      className={isInViewport ? 'isVisibleNoAnimation' : 'isHidden'}
      > 
      <h1 className="getShoppin">Cart</h1>
      <p className="getShoppin">Your shopping cart is empty.</p>
            <Link to={'/menu'} className="getShoppin">
      <GetShoppinButton>
      Get shoppin'!
      </GetShoppinButton>
      </Link>
      </EmptyCartWrapper>
    </Layout>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <Layout>
      <SEO title="Cart" />
      <Wrapper
      ref={targetRef}
      className={isInViewport ? 'isVisibleNoAnimation' : 'isHidden'}
      >     
      <h1>Cart</h1>
      {lineItems.map(item => (
        <React.Fragment key={item.id}>
          <LineItem key={item.id} item={item} />
          <Divider sx={{ my: 3 }} />
        </React.Fragment>
      ))}
      <div sx={{ display: "flex" }}>
        <Card sx={{ marginLeft: "auto", minWidth: "10rem", p: 4 }}>
          <h3 sx={{ mt: 0, mb: 3 }}>Cart Summary</h3>
          <Divider />

          <Grid gap={1} columns={2} sx={{ my: 3 }}>
            <p>Pre-Tax Total:</p>
            <p sx={{ marginLeft: "auto" }}>{total}</p>
          </Grid>

          <Divider />
          <Grid gap={1} columns={2}>
            <p variant="bold">Tax + Shipping Costs are calculated during checkout</p>
            
          </Grid>
          <br />
          {checkoutUrl != null ? (
            <a 
              className='checkoutButtonContainer'
              sx={{ mt: 4, width: "100%" }}
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            ><CheckoutButton>Checkout</CheckoutButton>
              
            </a>
          ) : null}
        </Card>
      </div>
      </Wrapper>
      <Footer />
    </Layout>
  )
}

export default CartPage
