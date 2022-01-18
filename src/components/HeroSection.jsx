import "./HeroSection.css";
import biker from "../asset/helmet-requirement 1.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-header">
        {/* Left Side */}
        <div className="left">
          <h1 className="text-bold">Your Bike Electric Update</h1>
          <p className="text-soft">
            Dummy text progressive, and affordable healthcare, accessible on
            mobile and online for everyone
          </p>
          <div className="input-container">
            <input type="text" placeholder="Search Bike or anything" />
            <button className="btn">Find</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={biker} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
