import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return(
        <Layout pageTitle="About Me">
            <p>About test texty text text</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About"></Seo>

export default AboutPage
