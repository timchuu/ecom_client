import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../nav/nav'

const links =[
    {
        name: "My Account",
        linkTo: "/user/dashboard"
      },
      {
        name: "User Information",
        linkTo: "/user/profile"
      },
      {
        name: "My Cart",
        linkTo: "/user/cart"
      }
]

const UserLayout = (props) => {
    const generateLinks = links =>
        links.map((item, index)=>(
            <Link to={item.linkTo} key={index}>
                {item.name}
            </Link>
        ));
  return (
    <div className="container">
  
    <div className="user_container">
    <div className="user_left_nav">
        <h2>My Account</h2>
        <div className="links">{generateLinks(links)}</div>
      </div>
      <div className="user_right">{props.children}</div>
    </div>
  </div>
  )
}

export default UserLayout
