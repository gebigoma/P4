import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className="NavBar ui three item menu">
      <div className="container">
      <Link className="item" to="/">Home</Link>
      {props.currentUser
        ? (
          <Fragment>
            <Link className="item" to="/submit">Submit</Link>
            <Link className="item" to="/profile">Profile</Link>
            <Link className="item" to="/vip">VIP</Link>
            <Link className="item" to="/logout">Log Out</Link>
          </Fragment>
        )
        : (
          <Fragment>
          <Link className="item" to="/login">Log In</Link>
          <Link className="item" to="/signup">Sign Up</Link>
        </Fragment>
        )
      }
      </div>
    </div>
  )
}

export default NavBar