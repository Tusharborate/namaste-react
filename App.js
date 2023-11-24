import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Heading from "./src/components/Heading";
import BodyComponent from "./src/components/Body";
import About from "./src/components/About";
import Cart from "./src/components/Cart";
import Services from "./src/components/Services";
import Contact from "./src/components/Contact";
import ErrorComp from "./src/components/ErrorComp";
import Restaurant from "./src/components/Restaurant";
import { useState, useEffect } from "react";
import UserContext from "./src/utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

// import Grossary from "./src/components/Grossary";

const Grossary = lazy(() => import("./src/components/Grossary"));

const Mainwrapper = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Tushar Borate",
    };
    setUserName(data.name);
  }, []);

  return (
    <div className="container">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Heading />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

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
        path: "/cart",
        element: <Cart />,
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
