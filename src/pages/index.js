import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return(
    <Layout pageTitle="Test Page Home">
      <p>Texty text text test</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.webp"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"></Seo>

export default IndexPage