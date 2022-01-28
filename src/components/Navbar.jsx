import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-header">
      <h3>
        <span className="bold-B">B</span>eBike
      </h3>
      <ul className="list">
        <li className="first-list">
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/ebikes">Bike Type</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Testimonials</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
