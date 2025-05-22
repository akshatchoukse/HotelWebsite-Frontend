import React from 'react'
import Header from '../Component/Header'
import Carousel from '../Component/Carousel'
import Location from '../Component/Location'
function Home() {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Location></Location>
      <div className="bg-[#fffaf4] font-bold text-[25px] h-[70vh] text-center w-[100%] px-30 py-12 flex items-center justify-center">Welcome to Hotel Saffron Inn, where comfort meets affordability! Enjoy clean, cozy rooms starting at just ₹699. For bookings, call us at 9111177767. Visit our second branch, Hotel Castle Inn, where rooms start from only ₹599. Both locations offer great facilities, friendly service, and a pleasant stay experience!
      </div>
    </div>
  )
}

export default Home