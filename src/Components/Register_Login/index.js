import React, { Component } from 'react'
import Login from './Login'

export class RegisterLogin extends Component {
  render() {
    return (
      <section className="ab-info-main py-5">
       <div className="container py-3">
       <h3 className="tittle text-center"><span className="sub-tittle">Find Us</span>Register</h3>
       <div className="row contact-main-info mt-5">
       <div className="col-md-6 contact-left-content">
                  <h5>HI</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <div className="read mt-3">
                            <input type="submit" value="Submit"/>
                        </div>
                </div>
               <Login/>
               
      </div>
      </div>
      
      </section>
    )
  }
}

export default RegisterLogin
