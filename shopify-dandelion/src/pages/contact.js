import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import styled from '@emotion/styled'
import ContactPageCard from '../components/ContactPageCard'
import Footer from '../components/Footer'

const Title=styled.h1`
width: 100%;
margin: auto;
text-align: center;
`

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Container>
        <Title>Contact Us</Title>
        
        <ContactPageCard
        id="card"
        info={data.contentfulContact}
        />
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
query ContactQuery {
  contentfulContact {
    email
    facebook
    instagram
    phoneNumber
  }
}
`


Contact.Layout = Layout 
export default Contact


