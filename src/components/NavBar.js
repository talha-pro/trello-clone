import React from "react"
import logo from "../assests/logo.jpg"

const NavBar = () => (
  <nav className="navigation d-flex align-items-center">
    <div className="navigation__container container-fluid">
      <div className="navigation__row">
        <img className="navigation__logo img-fluid" src={logo} alt="logo"></img>
        <div className="navigation__buttons">
          <div className="btn btn-default">Log In</div>
          <div className="btn btn-default signup">Sign Up</div>
        </div>
      </div>
    </div>
  </nav>
)

export default NavBar
