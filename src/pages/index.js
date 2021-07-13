import React from 'react'
import Helmet from 'react-helmet'

import { GalleryWrapper } from '../components/GalleryWrapper'
import Layout from '../components/layout'

// import InstaFeed from '../components/InstaFeed/InstaFeed'
import About from '../components/About'
import Contact from '../components/Contact'

const HomeIndex = () => {
  const siteTitle = 'Png Photography'
  const siteDescription = 'Portfolio of Victoria Png'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
				<GalleryWrapper />

				<About />

				{/* <InstaFeed /> */}

        <Contact />
      </div>
    </Layout>
  )
}

export default HomeIndex
