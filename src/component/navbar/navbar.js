import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import './style.css';



class  Navbar extends Component {

  render(){
  return (
    <div className="cake-navbar">
    <div className="container">
    <div className="row">
      <div className="col">
        <i class="fas fa-map-marker-alt"></i>
      <span className="sp1">523 Sylvan Ave</span><br/>
      <span className="sp2">Mountain View, CA 94041 USA</span>
      </div>
      <div className="col-6">
        <img src="./images/logo-default-231x49.png" alt="" />
      </div>
      <div className="col">
        <button className="btn btn-header">
        <i class="fas fa-envelope"></i>
      <span class="sp3"> Get in touch</span>
      </button>
      </div>
    </div>
</div>
    <div className="navb">
     <nav className="navbar navbar-default" >
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <NavLink to="/" ActiveClassName="active" exact className="nav-link" >Home</NavLink>
                  </li>
                <li className="nav-item ">
                <NavLink to="/gallery" className="nav-link">gallery</NavLink></li>
                <li className="nav-item ">
                <NavLink to="/shop" className="nav-link">shop</NavLink></li>
                <li className="nav-item ">
                <NavLink to="/blog" className="nav-link">blog</NavLink></li>
                <li className="nav-item dropdown ">
                <a  className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">pages</a>
                <div class="dropdown-menu">
          <Link to="/offer" class="dropdown-item">what we offer</Link>
          <Link to="/team" class="dropdown-item" href="#">our team</Link>
          <Link to="/testimonial" class="dropdown-item" href="#">testimonials</Link>
          <Link to="/price" class="dropdown-item" href="#">pricing list</Link>
        </div>
                </li>
                <li className="nav-item ">
                <NavLink to="/contact" className="nav-link" >Contact us</NavLink></li>
            </ul>
          </div>
          <div className="navbar-icons">
        <i className="fas fa-search"></i>
        <Link to="/cart" className="cart-link"> <i className="fas fa-shopping-cart"></i></Link>
         </div>
        </div>
      </nav>
        </div>
</div>
  )
}
}
export default Navbar;
