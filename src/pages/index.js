import React from 'react'
import Helmet from 'react-helmet'

import GalleryWrapper from '../components/GalleryWrapper'
import Layout from '../components/layout'

import InstaFeed from '../components/InstaFeed'
import About from '../components/About'
import Contact from '../components/Contact'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <InstaFeed />

				<GalleryWrapper />

				<About />

        <Contact />
      </div>
    </Layout>
  )
}

export default HomeIndex
