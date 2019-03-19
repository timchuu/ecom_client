import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser, auth} from '../../store/Actions/user_actions'

const access_token = localStorage.getItem('token')

class nav extends Component {

    
  
    componentDidMount(){
        if(access_token){
            this.getUserInfo()
           
        } else {
            return null
        }
        
    }
   
    logOutHandler = () =>{
        this.props.dispatch(logoutUser())
                this.props.history.push('/')
            
        }
            
    
    
    getUserInfo(){ 
        if(access_token){
            this.props.dispatch(auth())
        } else {
            return null
        }
    } 
   
    
    renderLinks(){
        console.log(this.props)
        if(access_token && this.props.authenticated){ 
           
            return [
                <>
                <li>
                   
                    <label hmtlFor="drop-2" className="toggle">MY Account<span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                    <a href="#">My Account <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                    <input type="checkbox" id="drop-2" />
                    <ul>
                        <li onClick={()=>this.logOutHandler()}><a>Log out</a></li>
                    </ul>
                </li>
                    <li><a href="contact.html">My Cart</a></li>
                </>
            ]
        } else  {
            
            return [
                
                <li><Link to="/register_login">Register/Login</Link></li>
            ]
            
        }
    }
    

    render (){
       
  return (
    <header className="header">
    <div className="container-fluid px-lg-5">
        
        <nav className="py-4">
            <div id="logo">
                <h1> <a href="index.html"><span className="fa fa-bold" aria-hidden="true"></span>ootie</a></h1>
            </div>

            <label htmlFor="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2">
            <li className="active"><a href="index.html">Home</a></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                
                {this.renderLinks()}
                
            </ul>
        </nav>
       
    </div>
</header>
  )

    }
}

function mapStateToProps(state){
    return {
        
        userInfo: state.user.userData,
        authenticated:state.user.authenticated
    }
}


export default connect(mapStateToProps)(withRouter(nav))
