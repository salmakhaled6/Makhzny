import React from 'react'
import Carousl from '../Components/Carousl'
import InfoTwo from '../Components/InfoTwo'
import Location from '../Components/Location'
import Offers from '../Components/Offers'
import OurServices from '../Components/OurServices'
import Partners from '../Components/Partners'
import Reviews from '../Components/Reviews'
import Store from '../Components/Store'

function HomePage() {
  return (
    <div>
      {/* <Offers /> */}
      <Carousl />
      {/* <OurServices /> */}
      <Store />
      <InfoTwo />
      <Reviews />
      <Location />
      <Partners />
    </div>
  )
}

export default HomePage
