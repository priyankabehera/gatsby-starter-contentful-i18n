import React from 'react'
import Link from 'gatsby-link'
import "../css/header.css";

const Header = (props) => (
  <div
      className="maindiv"
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
        className="container"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
          height:'100px',
      }}
    >
      <div className="menu-container">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            CuisineSnaps
          </Link>
        </h1>
      </div>
        <ul className="primary-menu">
            <li><a href="#">Home</a></li>
            <li><a href="/ahmedabad">Ahmedabad</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
  </div>
)

export default Header;