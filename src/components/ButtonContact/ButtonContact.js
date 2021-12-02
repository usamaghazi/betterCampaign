import React from "react";
import "./Buttonmodule.css";
const Button = (props) => {
  return (
    <>
      {/* <button className={classes.props.btnType}>{props.children}</button> */}
      <button className="ContactButton">{props.children}</button>
    </>
  );
};

export default Button;