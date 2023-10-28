import React from "react";
import ReactDOM from "react-dom/client";

import Heading from "./src/components/Heading";
import BodyComponent from "./src/components/Body";

const mainwrapper = (
  <div className="container">
    <Heading />
    <BodyComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainwrapper);
