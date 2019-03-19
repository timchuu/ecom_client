import React, { Component } from 'react'
import UserLayout from '../utils/hoc/UserLayout'
import { connect } from 'react-redux'
import { auth } from '../store/Actions/user_actions'
export class DashboardContainer extends Component {

  state = {
    isLoading:false
  }


  loadUserData = () =>{
    const access_token = window.localStorage.token
    this.props.dispatch(auth(access_token))
    this.setState({isLoading:false})
  }

  componentDidMount(){
   
    if(window.localStorage.getItem('token') !== null){
      //ARE LOGGED IN
      this.setState({isLoading:true});
      this.loadUserData();
    }

  }
  render() {
    console.log(this.props)
    return (
      <UserLayout >
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
            <span>
              Name: {this.props.user ? this.props.user.user.name :null}
            </span>
            <span>Email: {this.props.user ? this.props.user.user.email :null}</span>
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
const mapStateToProps = (state) =>{
  return {
    user: state.user.userData
  }
}

export default connect(mapStateToProps)(DashboardContainer)
