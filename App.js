import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Heading from "./src/components/Heading";
import BodyComponent from "./src/components/Body";
import About from "./src/components/About";
import Services from "./src/components/Services";
import Contact from "./src/components/Contact";

const Mainwrapper = () => (
  <div className="container">
    <Heading />
    <BodyComponent />
  </div>
);

const LoginURL = createBrowserRouter([
  {
    path: "/",
    element: <Mainwrapper />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={LoginURL} />);
