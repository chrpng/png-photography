import React from 'react'
import Seo from '../components/Seo'

import { GalleryWrapper } from '../components/GalleryWrapper'
import Layout from '../components/layout'

// import InstaFeed from '../components/InstaFeed/InstaFeed'
import About from '../components/About'
import Contact from '../components/Contact'

const HomeIndex = () => {
  return (
    <Layout>
			<Seo />
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
