import { LOGO_URL } from "../utils/config";

const Heading = () => (
  <header className="header">
    <div className="logo">
      <img src={LOGO_URL} alt="Logo" />
    </div>
    <ul className="navigation">
      <li>Home</li>
      <li>About Us</li>
      <li>Service</li>
      <li>Contact</li>
    </ul>
  </header>
);

export default Heading;
