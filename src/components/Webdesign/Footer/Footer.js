import React,{ Fragment} from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import './Footer.css'
const Btn = styled.button`
  width: 90%;
  background-color: #00fa96;
  outline: none;
  cursor: pointer;
  border: 1px solid #34c9eb;
  color: #222b38;
  font-family: inherit;
  font-size: 1.2em;
  padding: 10px 25px;
  box-shadow: 5px 5px 5px #222b38;
  border-radius: 5px;
  margin-top: 2rem;
  font-weight: normal;
  &:hover {
    background-color: #222b38;
    border: 1px solid #34c9eb;
    color: #00fa96;
  }
`;

let space = <Fragment>&nbsp;&nbsp;</Fragment>;

const Footer = () => {
    return(
        <>
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#222b38",
        fontFamily: "San Serif",
        position: "relative",
        marginTop: "8rem",
        paddingBottom: "10rem",
      }}
    >
      <div className="row">
        <div className="col-lg-6  text-white">
          <h1
            style={{
              marginTop: "7rem",
              marginLeft: "3rem",
              fontSize: "2.8rem",
            }}
          >
            Klaar om je bedrijf naar de volgende stap te tillen?
          </h1>
          <p style={{ marginLeft: "3rem", fontSize: "1.2rem" }}>
            Wat voor type website werkt het beste voor jouw bedrijf? Stuur een
            bericht en ontvang vrijblijvend advies van onze online specialist
            Roderick. We weten zeker dat alleen al de kennismaking je veel
            inzicht geeft. Dus pak die winst!
          </p>
          <div className="d-flex d-flex justify-content-center">
            <hr className="w-50" />
          </div>

          <div className="row mt-5">
            <div className="col-lg-8">
              <img
                src="Placeholder.png"
                alt="..."
                className="w-50 rounded-circle"
                style={{ marginLeft: "4rem" }}
              />
            </div>

            <div
              className="col-lg-4 mt-2"
              style={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              <p>
                Roderick {space} . {space}Online specialist
              </p>
              <Link to="/webdesign" style={{color:'#00FA96',textDecoration:'none'}}>
                hallo@dev.bettercampaign.nl
              </Link>
            </div>
          </div>
        </div>
            {/*Second Column */}
            <div className="col-lg-6 p-2">
        <div className="contactContainer">
      <div
        className="card Card text-white"
        style={{
          boxShadow: "0 5px 51px 0px rgba(0,0,0,0.6)",
          backgroundColor: "#222b38",
          borderRadius: "20px"
        }}
      >
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label
                for="colFormLabelLg"
                className="col-sm-2 col-lg-12 col-xl-2 col-form-label col-form-label-lg"
                style={{ fontSize: "1rem" }}
              >
                Naam
              </label>
              <div className="col-sm-10 col-lg-12 col-xl-10">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="Julia Dekker"
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label
                for="colFormLabelLg"
                className="col-sm-2 col-lg-12 col-xl-2 col-form-label col-form-label-lg"
                style={{ fontSize: "1rem" }}
              >
                Website
              </label>
              <div className="col-sm-10 col-lg-12 col-xl-10">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="voorbeeld.nl"
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label
                for="colFormLabelLg"
                className="col-sm-2 col-lg-12 col-xl-2 col-form-label col-form-label-lg"
                style={{ fontSize: "1rem" }}
              >
                Email
              </label>
              <div className="col-sm-10 col-lg-12 col-xl-10">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="julia.dekkers@voorbleed.nl"
                />
              </div>
            </div>
            <div className="form-group row mt-3">
              <label
                for="colFormLabelLg"
                className="col-sm-2 col-lg-12 col-xl-2 col-form-label col-form-label-lg"
                style={{ fontSize: "0.9rem" }}
              >
                Telefoon
              </label>
              <div className="col-sm-10 col-lg-12 col-xl-10">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="colFormLabelLg"
                  placeholder="06-34567890"
                />
              </div>
            </div>

            <div className="form-group row mt-3">
              <label
                for="colFormLabelLg"
                className="col-sm-2 col-lg-12 col-xl-2 col-form-label col-form-label-lg"
                style={{ fontSize: "1rem" }}
              >
                Bericht
              </label>
              <div className="col-sm-10 col-lg-12 col-xl-10">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  rows={4}
                  placeholder="je kunt heir alvast een korte toelichting geven"
                ></textarea>
              </div>
              <div
                className="form-check d-flex justify-content-center mx-5 px-5"
                style={{ marginTop: "1rem" }}
              >
                <input
                  className="form-check-input mx-3"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Ik ga akkoord met de privacyverklaring.
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <Btn>Verzenden</Btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/*div below */}
    </div>
      </div>
    </div>

  </>
    )
  
};

export default Footer