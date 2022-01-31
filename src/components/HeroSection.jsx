import "./HeroSection.css";
import biker from "../asset/helmet-requirement 1.svg";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-header">
        {/* Left Side */}
        <div className="left">
          <h1 className="text-bold header">
            Your Bike <br />
            Electric Update
          </h1>
          <p className="text-soft para">
            Dummy text progressive, and affordable <br />
            healthcare, accessible on mobile and online for everyone
          </p>
          <div className="input-container">
            <input
              className="input-text"
              type="text"
              placeholder="Search Bike or anything"
            />
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
