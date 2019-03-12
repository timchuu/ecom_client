import React, { Component } from 'react'
import Nav from '../utils/nav/nav'
import Breadcrumbs from '../Components/Shop/Breadcrumbs'
import Welcome from '../Components/About/Welcome'
import Offer from '../Components/About/Offer'
import AbPromotion from '../Components/About/AbPromotion'
import Stats from '../Components/About/Stats'
import Testimonials from '../Components/Home_Page/Testimonials/Testimonials'
import PopularProducts from '../Components/Home_Page/Popular_Products/PopularProducts'
import Brands from '../Components/Home_Page/Brands/Brands'
import Footer from '../Components/Home_Page/Header_Footer/Footer'

export class AboutContainer extends Component {
  render() {
    return (
      <>
       <div className="main-banner  inner" id="home">
      <header className="header">
          <div className="container-fluid px-lg-5">
     <Nav/>
     </div>
     </header>      
  </div>
  <ol className="breadcrumb">
      <Breadcrumbs />
  </ol>
  <section className="hand-crafted py-5">
        <Welcome />
  </section>
  <section className="about py-md-5 py-5">
        <Offer />
  </section>
  <section className="hand-crafted py-5">
        <AbPromotion />
  </section>
  <section className="stats py-5" id="stats">
        <Stats />
  </section>
  <Testimonials/>
  <PopularProducts />
  <Brands />
  <footer>
      <Footer />
  </footer>
      </>
    )
  }
}

export default AboutContainer
