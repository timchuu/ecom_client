import React from 'react'
import Nav from '../../../utils/nav/nav'



const Header = () => {
  return (
    
          
    <div className="main-banner" id="home">
       <Nav/> 
        <div className="banner-info">
            <p>Trending of the week</p>
            <h3 className="mb-4">Casual Shoes for Men</h3>
            <div className="ban-buttons">
                <a href="shop-single.html" className="btn">Shop Now</a>
                <a href="single.html" className="btn active">Read More</a>
            </div>
        </div>
        

    </div>
    
   
  )
}

export default Header
