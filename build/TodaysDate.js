import React from "react";
import './css/app.css';
var TodaysDate = function TodaysDate(props) {
  return React.createElement(
    "div",
    null,
    props.children,
    React.createElement(
      "h1",
      null,
      "Hello"
    ),
    React.createElement("img", { src: "./img/404@2x.png" })
  );
};
export default TodaysDate;