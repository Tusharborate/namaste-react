import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Heading from "./src/components/Heading";
import BodyComponent from "./src/components/Body";
import About from "./src/components/About";
import Services from "./src/components/Services";
import Contact from "./src/components/Contact";
import ErrorComp from "./src/components/ErrorComp";
import Restaurant from "./src/components/Restaurant";
// import Grossary from "./src/components/Grossary";

const Grossary = lazy(() => import("./src/components/Grossary"));

const Mainwrapper = () => (
  <div className="container">
    <Heading />
    <Outlet />
  </div>
);

const LoginURL = createBrowserRouter([
  {
    path: "/",
    element: <Mainwrapper />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/grossary",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Grossary />
          </Suspense>
        ),
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
      {
        path: "/restaurants/:id",
        element: <Restaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={LoginURL} />);
