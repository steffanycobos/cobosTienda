import React from "react";
import "./FlexWrapper.css";

function FlexWrapper(props) {
  return <div className="flexWrapper">{props.children}</div>;
}

export default FlexWrapper;