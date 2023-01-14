import React from 'react'
import About from '../../components/About'
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper'
import Reservation from '../../components/Reservation'
import Carousel from '../../components/ui/Carousel'

const index = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  )
}

export default index
