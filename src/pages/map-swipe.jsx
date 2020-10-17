import React from 'react'

import Layout from 'components/Layout'
import Map from 'components/Map'
import swipeData from '../constants/swipe'
import Compare from 'mapbox-gl-compare'

const MapPage = () => {
  return (
    <Layout title="Swipe and Compare">
      <Map />
      <p>jjj</p>
      <Map />
    </Layout>
  )
}

export default MapPage
