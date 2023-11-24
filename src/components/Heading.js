import { LOGO_URL } from "../utils/config";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Heading = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

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
        <li className="px-2">
          <Link to="/cart">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
            </svg>
            ({cartItems.length} items)
          </Link>
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
