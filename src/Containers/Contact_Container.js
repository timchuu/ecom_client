import React, { Component } from 'react'
import Nav from '../utils/nav/nav'
import Breadcrumbs from '../Components/Shop/Breadcrumbs'
import Contact from '../Components/Contact/Contact'
import Info from '../Components/Contact/Info'
import Map from '../Components/UI/Map'
import Footer from '../Components/Home_Page/Header_Footer/Footer'

 class ContactContainer extends Component {
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
  <section className="ab-info-main py-5">
  <div className="container py-3">
  <h3 className="tittle text-center"><span className="sub-tittle">Find Us</span> Contact Us</h3>
  <div class="row contact-main-info mt-5">
  <Contact />
  <Info/>
  </div>
  <Map />
  </div>
  </section>
  <footer>
    <Footer />
  </footer>
  </>
    )
  }
}

export default ContactContainer
