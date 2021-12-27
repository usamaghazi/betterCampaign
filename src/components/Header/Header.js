import React, { useState } from "react";
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap";
import  './Header.css';

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [showCloseButton, setShowCloseButton] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        className={showCloseButton ?  'navBar2': 'navBar1'}
      >
        
        <Navbar.Brand className="mx-3">
        <Link to='/'>
          <img src={`../../../Logo.png`} className="img-responsive" />
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", marginRight: "1rem" }}
          onClick={() => setShowCloseButton(!showCloseButton)}
        >
          {showCloseButton ? (
            <FaTimes color="#00fa96" style={{ fontSize: "1.5rem" }} />
          ) : (
            <GiHamburgerMenu color="#00fa96" style={{ fontSize: "1.7rem" }} />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to='/webdesign' className={showCloseButton ? 'list2' : 'list1'}>
              Webdesign
            </Link>
           
            <Link to='/zoekmachine' className={showCloseButton ? 'list2' : 'list1'}>
              Zoekmachine optimalisatie(SEO)
              </Link>
           
            
              <Link to='/googleads' className={showCloseButton ? 'list2' : 'list1'}>
              Google Ads
              </Link>
            
            
              <Link to='/conversie' className={showCloseButton ? 'list2' : 'list1'}>
              Conversie optimalisatie(CRO)
              </Link>
            
            
              <Link to='/contact' className={showCloseButton ? 'list2' : 'list1'}>
              Contact
              </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
