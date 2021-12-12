import React from "react";
import Button from "../Button/Button";
import './Webdesign.css'
const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#222b38",marginBottom:'3.5rem' }}>
        <div className="row">
          <div className="col-xl-6 text-white">
            <div
              className="mx-4"
              style={{
                marginTop: "4rem",
              }}
            >
                <h1 className="TextHeader">
              Website laten maken
              </h1>
              <p className="TextParagraph">
              Een prachtige website op maat met focus op meer conversie en sales. 
              </p>
            </div>
            <div
              className="mx-4"
              style={{ marginTop: "2rem" }}
            >
                <p className="SecondPara">
                Maak indruk online met een professionele website op maat. Ontworpen voor jouw merk, passend bij jouw doelgroep en met focus op conversie en sales.
               </p>
               <div className="Button">
              <span>
                <Button btnType="MainPageButton">
                  Neem Contact Op
                </Button>
              </span>
              {/* <span>
                <button
                  type="button"
                  className="btn btn-link mx-3"
                  style={{ color: "#00fa96" }}
                >
                  Kennismaken
                </button>
              </span> */}
            </div>​
            </div>
          </div>
          <div className="col-xl-6">
            <img
              src="homeImage.png"
              className="img-responsive w-100"
              className="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
