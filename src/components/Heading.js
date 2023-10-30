import { LOGO_URL } from "../utils/config";
import { useState } from "react";

const Heading = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <ul className="navigation">
        <li>Home</li>
        <li>About Us</li>
        <li>Service</li>
        <li>Contact</li>
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
