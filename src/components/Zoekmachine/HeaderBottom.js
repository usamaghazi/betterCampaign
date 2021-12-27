import React from "react";
import Button from "../Button/Button";
import '../Webdesign/Webdesign.css'
const HeaderBottom = () => {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#222b38",marginBottom:'3.5rem' }}>
          <div></div>
        <div className="row">
          <div className="col-xl-6 text-white">
            <div
              className="mx-4"
              style={{
                marginTop: "4rem",
              }}
            >
                <h1 className="TextHeader">
              ZOEKMACHINE OPTIMALISATIE (SEO)
              </h1>
              <p className="TextParagraph">
              Hoger scoren met SEO in de onbetaalde resultaten van Google. 
              </p>
            </div>
            <div
              className="mx-4"
              style={{ marginTop: "2rem" }}
            >
                <p className="SecondPara">
                Onze professionals krijgen de juiste bezoekers naar jowu website
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
              src={`../../../Placeholder.png`}
              className="img-responsive w-100"
              className="Image"
              style={{marginTop:'2rem',height:'400px',width:'600px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
