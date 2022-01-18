import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-header">
      <h3>
        <span className="bold-B">B</span>eBike
      </h3>
      <ul className="list">
        <li className="first-list">
          <a href="/">Product</a>
        </li>
        <li>
          <a href="/">Bike Type</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Testimonials</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
