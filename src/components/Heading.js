import { LOGO_URL } from "../utils/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  const [btnLabel, setBtnLabel] = useState("Login");

  useEffect(() => {
    console.log("Header Button Clicked");
  }, [btnLabel]);

  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <button
          className="btnClass"
          onClick={() => {
            btnLabel == "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
          }}
        >
          {btnLabel}
        </button>
      </ul>
    </header>
  );
};

export default Heading;
