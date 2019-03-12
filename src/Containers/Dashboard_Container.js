import React, { Component } from 'react'
import UserLayout from '../utils/hoc/UserLayout'

export class DashboardContainer extends Component {
  render() {
    return (
      <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
            <span>
              Name:
            </span>
            <span>Email: </span>
            <button
              
            />
          </div>
        </div>
        <div className="user_nfo_panel">
          <h1>Purchase History</h1>
          <div className="user_product_block_wrapper">History</div>
        </div>
      </div>
      </UserLayout>
    )
  }
}

export default DashboardContainer
