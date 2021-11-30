import React from "react"

import { Link } from "gatsby"

import "./Header.css"
const Header = () => {
  return (
    <div className="Navbar">
      <div className="NavBrand" style={{ color: "white" }}>
        Better Campaign
      </div>
      <div className="NavOptions">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/page-2/">
            {" "}
            <li>Webdesingn</li>
          </Link>
          <Link to="/page-2/">
            {" "}
            <li>Zoek Machine (SEO)</li>
          </Link>
          <Link to="/page-2/">
            {" "}
            <li>Google Ads</li>
          </Link>
          <Link to="/conversie/">
            {" "}
            <li>Conversie optimalisate (CRO)</li>
          </Link>
          <Link to="/contact/">
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
