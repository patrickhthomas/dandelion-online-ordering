import React from 'react'
import styled from '@emotion/styled'
import productPatLogo from '../../static/images/productPatLogo.png'
import { Link } from 'gatsby'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Wrapper = styled.footer`
  position: static;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding-bottom: 4em;
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    font-size: .8em;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const patLogo = productPatLogo

const Footer = () => {
  const { basePath } = useSiteMetadata()
  return (
  <Wrapper>
    <List>
      <Item>
      <Link to='/'>Home</Link>
      </Item>
      <Item>
      <Link to='/menu/'>Menu</Link>
      </Item>
      <Item>
      <Link to='/gallery/'>Gallery</Link>
      </Item>
      <Item>
        <a
          href="https://www.giftsfromtheearth.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ padding: '0em', fontSize: '.6em' }}
        >
          Gifts from the Earth
        </a>
      </Item>
      <Item>
        <a
          href="https://www.patrickthomas.design/"
          rel="nofollow noopener noreferrer"
          target="_blank"
          style={{ padding: '0em', fontSize: '.6em' }}
        >

          Copyright &copy; 2021 Patrick Thomas Design All Rights Reserved
          <img
            src={patLogo}
            style={{ width: '2em' }}
            alt="Product Pat Logo"
          />
        </a>
      </Item>
    </List>
  </Wrapper>
)}

export default Footer
