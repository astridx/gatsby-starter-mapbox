import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'style'
import Layout from 'components/Layout'
import Swipemap from 'components/Swipemap'
import swipeData from '../constants/swipe'
import Compare from 'mapbox-gl-compare'
import { Box, Flex } from 'components/Grid'

const MapPage = () => {
  return (
    <Layout title="Full Screen Map">
      <Swipemap />
    </Layout>
  )
}

export default MapPage
