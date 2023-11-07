import { LOGO_URL } from "../utils/config";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Heading = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("Header Button Clicked");
  }, [btnLabel]);

  return (
    <header className="flex justify-between items-center bg-pink-50">
      <div>
        <img src={LOGO_URL} alt="Logo" className="w-[100px]" />
      </div>
      <ul className="flex items-center">
        <li className="px-2">
          <p style={{ fontSize: "12px" }}>
            Online Status: {onlineStatus === true ? "✔️" : "❌"}
          </p>
        </li>
        <li className="px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2">
          <Link to="/grossary">Grossary</Link>
        </li>
        <li className="px-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-2">
          <Link to="/services">Services</Link>
        </li>
        <li className="px-2">
          <Link to="/contact">Contact</Link>
        </li>
        <button
          className="px-4 py-2 bg-gray-950 rounded-xl text-white mx-5 hover:bg-gray-800"
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
