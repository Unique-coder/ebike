import BikeCard from "./BikeCard";
import "./Adidas.css";
import bikeRider from "../asset/adidas-rider.svg";

const Adidas = () => {
  return (
    <div className="bike-rider">
      <BikeCard title="rider" bike={bikeRider} />
      <div className="about-biker">
        <h2 className="text-bold about-header">Hybrid Bikes</h2>
        <p className="text-soft about-para">
          Dummy Text progressive, and affordable healthcare, accessible on
          mobile and online for everyone. To us, its not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="btn-ride">Learn More</button>
      </div>
    </div>
  );
};

export default Adidas;
