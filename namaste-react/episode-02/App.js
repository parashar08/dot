import React from "react";
import ReactDOM from "react-dom";

const headingElement = React.createElement("h1", { id: "heading" }, "zylo");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingElement);