import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoIron from './images/logoIronhack.png'

import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-primary d-flex justify-content-between">
      <Link className="navbar-brand" to="/">
        <img src={LogoIron} alt="IronHack" width="50" height="52" />
      </Link>
      <Link className="navbar-brand" to="/">
        <i class="fa fa-book"></i> Mural
      </Link>
      <Link className="navbar-brand" to={`/${props.id}/MyHelps`}>
        <i className="fa fa-fw fa-star"></i> MyHelps
      </Link>
      <Link className="navbar-brand" to="/Login">
        <i className="fa fa-fw fa-user"></i>Login
      </Link>
      <Link className="navbar-brand" to="/Signup">
        <i className="fa fa-sign-in"></i> SignUp
      </Link>
    </nav>
  )
}

export default Navbar
