import React from 'react'


const nav = () => {
  return (
    <header className="header">
    <div className="container-fluid px-lg-5">
        
        <nav className="py-4">
            <div id="logo">
                <h1> <a href="index.html"><span className="fa fa-bold" aria-hidden="true"></span>ootie</a></h1>
            </div>

            <label for="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu mt-2">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li>
                   
                    <label for="drop-2" className="toggle">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                    <a href="#">Drop Down <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                    <input type="checkbox" id="drop-2" />
                    <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="shop.html">Shop Now</a></li>
                        <li><a href="shop-single.html">Single Page</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
       
    </div>
</header>
  )
}

export default nav
