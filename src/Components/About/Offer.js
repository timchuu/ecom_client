import React from 'react'

const Offer = () => {
  return (
    <div className="container py-md-3">
            <h3 className="tittle text-center">What We Offer</h3>
            <div className="feature-grids row">
                <div className="col-md-4 gd-bottom mt-lg-4">
                    <div className="bottom-gd p-lg-5 p-4">
                        <span className="fa fa-truck" aria-hidden="true"></span>
                        <h3 className="my-3">
                            FREE SHIPPING</h3>
                        <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                    </div>
                </div>
                <div className="col-md-4 gd-bottom mt-lg-4">
                    <div className="bottom-gd2-active p-lg-5 p-4">
                        <span className="fa fa-bullhorn" aria-hidden="true"></span>
                        <h3 className="my-3">FREE RETURN</h3>
                        <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                    </div>
                </div>
                <div className="col-md-4 gd-bottom mt-lg-4">
                    <div className="bottom-gd p-lg-5 p-4">
                        <span className="fa fa-gift" aria-hidden="true"></span>
                        <h3 className="my-3">MEMBER DISCOUNT</h3>
                        <p>Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.</p>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Offer
