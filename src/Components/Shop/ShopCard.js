import React from 'react'

const ShopCard = () => {
  return (
      <>
    <div class="col-md-4 product-men">
    <div class="product-shoe-info shoe text-center">
        <div class="men-thumb-item">
            <img src="images/s1.jpg" class="img-fluid" alt=""/>
            <span class="product-new-top">New</span>
        </div>
        <div class="item-info-product">
            <h4>
                <a href="shop-single.html">Bella Toes </a>
            </h4>

            <div class="product_price">
                <div class="grid-price">
                    <span class="money">$675.00</span>
                </div>
            </div>
            <ul class="stars">
                <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                <li><a href="#"><span class="fa fa-star-o" aria-hidden="true"></span></a></li>
            </ul>
        </div>
    </div>
</div>

</>
  )
}

export default ShopCard
