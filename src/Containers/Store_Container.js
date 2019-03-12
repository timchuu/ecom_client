import React, { Component } from 'react'
import Occasion from '../Components/Shop/Occasion'
import Discount from '../Components/Shop/Discount'
import CustomerReview from '../Components/Shop/CustomerReview'
import SpecialDeal from '../Components/Shop/SpecialDeal'
import ShopCard from '../Components/Shop/ShopCard'
import ShopBanner from '../Components/Shop/ShopBanner'
import Footer from '../Components/Home_Page/Header_Footer/Footer'
import Nav from '../utils/nav/nav'
import Breadcrumbs from '../Components/Shop/Breadcrumbs'

 class StoreContainer extends Component {
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
        <section className="ab-info-main py-md-5 py-4">
        <div className="container py-md-3">
           
            <div className="row">
                
                <div className="side-bar col-lg-4">

                    <div className="search-bar w3layouts-newsletter">
                        
                    </div>
                    
                    <div className="left-side my-4">
                        <Occasion />
                    </div>
                   
                    <div className="left-side">
                        <Discount />
                    </div>
                    
                    <div className="customer-rev left-side my-4">
                       <CustomerReview />
                    </div>
                    
                    <div className="deal-leftmk left-side">
                      <SpecialDeal />  
                    </div>
                   

                </div>
                
                <div className="left-ads-display col-lg-8">
                    <div className="row">
                       <ShopCard />
                        <ShopBanner />
                </div>
            </div>
        </div>
        </div>
    </section>
    <footer>
        <Footer />
    </footer>
     </>
    )
  }
}

export default StoreContainer
           