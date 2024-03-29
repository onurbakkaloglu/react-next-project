import React from 'react'
import About from '../../components/About'
import Campaigns from '../../components/Campaigns'
import Customers from '../../components/customers/Customers'
import MenuWrapper from '../../components/product/MenuWrapper'
import Reservation from '../../components/Reservation'
import Carousel from '../../components/ui/Carousel'

const index = () => {
  return (
    <React.Fragment>
      <Carousel/>
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers/>
    </React.Fragment>
  )
}

export default index
