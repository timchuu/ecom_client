import React, { Component } from 'react'
import Header from './Header_Footer/Header'
import Features from './Features/Features'
import NewArrivals from './New_Arrivals/NewArrivals'
import Testimonials from './Testimonials/Testimonials'
import PopularProducts from './Popular_Products/PopularProducts'
import Brands from './Brands/Brands'
import Footer from './Header_Footer/Footer'

 class HomePage extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Features />
       <NewArrivals/>
       <Testimonials/>
       <PopularProducts/>
       <Brands/>
       <Footer/>
      </div>
    )
  }
}

export default HomePage;
