import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#222b38", padding: "1rem" }}
      >
        <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand mx-3 text-white">
            
              <img src="Logo.png" className="img-responsive" />
            
          </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white h6 m-3"
                    aria-current="page"
                  >
                    Webdesign
                  </a>
                </li>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link text-white h6 m-3">
                    Zoekmachine optimalisatie(SEO)
                  </a>
                </li>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link text-white h6 m-3">Google Ads</a>
                </li>
              </Link>
              <Link to="/conversie" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link text-white h6 m-3">
                    Conversie optimalisatie(CRO)
                  </a>
                </li>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a className="nav-link text-white h6 m-3">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
