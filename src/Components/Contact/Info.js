import React from 'react'

const Info = () => {
  return (
    <div className="col-md-6 contact-left-content">
                    <div className="address-con">
                        <h4 className="mb-2"><span className="fa fa-phone-square" aria-hidden="true"></span> Phone</h4>
                        <p>+121 098 8907 9987</p>
                        <p>+121 098 8907 9987</p>
                    </div>
                    <div className="address-con my-4">
                        <h4 className="mb-2"><span className="fa fa-envelope-o" aria-hidden="true"></span> Email </h4>
                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                        <p><a href="mailto:info@example.com">info@example.com</a></p>
                    </div>
                    <div className="address-con mb-4">
                        <h4 className="mb-2"><span className="fa fa-fax" aria-hidden="true"></span> Fax</h4>

                        <p>(800) 123-80088</p>
                    </div>
                    <div className="address-con">
                        <h4 className="mb-2"><span className="fa fa-map-marker" aria-hidden="true"></span> Location </h4>

                        <p>Honey Avenue, New York City</p>
                    </div>

                </div>

           
  )
}

export default Info
