import React from 'react'
import Share from './Share'


const Showcase = () => {
  return (
    <>
      
     <div class="desc1-right col-md-6 pl-lg-4">
                            <h3>Lorem ipsum dolor sit amet laoret.</h3>
                            <h5>Rs. 499 <span>599</span> <a href="#">click for offer</a></h5>
                            <div class="available mt-3">
                                <form action="#" method="post" class="w3layouts-newsletter">
                                    <input type="email" name="Email" placeholder="Enter your email..." required="" />
                                    <button class="btn1">Check</button>

                                </form>
                                <span><a href="#">login to save in wishlist </a></span>
                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.. </p>
                            </div>
                              <Share />
                            </div>
                            </>
    
  )
}

export default Showcase
