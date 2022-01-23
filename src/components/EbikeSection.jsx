import "./EbikeSection.css";

import bike1 from "../asset/bike-1.svg";
// import bike2 from "../asset/bike-2.svg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import BikeCard from "./BikeCard";

const EbikeSection = () => {
  return (
    <div>
      <div className="price-bike">
        {/* Bike 1 */}
        <BikeCard title="Universal eBike Kit" bike={bike1} />
        {/* Bike 2 */}
        <BikeCard title="Brampoton eBike Kit" bike={bike1} />
        {/* Bike 3 */}
        <BikeCard title="Additional eBike Kit" bike={bike1} />
        {/* Bike 4 */}
        <BikeCard dim="dim" title="Professional eBike Kit" bike={bike1} />
      </div>
      {/* Slide-Arrow */}
      <div className="arrow-div">
        <div className="arrow">
          <FaArrowLeft style={{ color: "black" }} />
        </div>
        <div className="arrow">
          <FaArrowRight style={{ color: "black" }} />
        </div>
      </div>
    </div>
  );
};

export default EbikeSection;
