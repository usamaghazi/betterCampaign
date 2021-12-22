import React from "react";
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import '../Webdesign/Webdesign.css'

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#222b38",
          marginTop: "5rem",
          padding: "2rem",
        }}
      >
        <div className="row">
          <div
            className="col-xl-6"
            style={{ color: "white", marginTop: "4rem" }}
          >
            <h1>
                Ook beter gevonden 
              <br /> worden in Google
            </h1>
            <p style={{ fontSize: "1.1rem",lineHeight:'1.6' }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
            {/* <ul style={{ listStyle: "square" }}>
              <li>
                <a href="hallo@dev.bettercampaign.nl">
                  hallo@dev.bettercampaign.nl
                </a>
              </li>
              <li>
                <a href="#">Plan een vrijblijvend gesprek</a>
              </li>
            </ul> */}
            <ul style={{marginLeft:'-10px', marginTop:'6%'}}>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><Link to='/' style={{color:'#16ED96', textDecoration:'none',marginLeft:'3%'}}>hallo@dev.bettercampaign.nl</Link></li>
          <li className="ListStyle"><FontAwesomeIcon icon={faSquare} className="ListIconStyle" /><Link to='/' style={{color:'#16ED96' , textDecoration:'none',marginLeft:'3%'}}>Plan een vrijblijvend gesprek</Link></li>
          
        </ul>
          </div>
          <div className="col-xl-6">
            <img
              src="Placeholder.png"
              className="img-responsive w-100"
              alt=".."
              style={{ marginTop: "2rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
