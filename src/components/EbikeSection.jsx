import "./EbikeSection.css";
import bike1 from "../asset/bike-1.svg";
import bike2 from "../asset/bike-2.svg";

const EbikeSection = () => {
  return (
    <div>
      <div className="price-bike">
        {/* Bike 1 */}
        <div className="bike-select">
          <h4>Universal eBike Kit</h4>
          <div className="img-bike">
            <img src={bike1} alt="" />
          </div>
          <div className="order">
            <div className="price">
              <p className="text-soft">Price</p>
              <h4>$750.00</h4>
            </div>
            <button className="btn btn-order">Order</button>
          </div>
        </div>
        {/* Bike 2 */}
        <div className="bike-select">
          <h4 className="big-header">Brampoton eBike Kit</h4>
          <div className="img-bike">
            <img src={bike2} alt="" />
          </div>
          <div className="order">
            <div className="price">
              <p className="text-soft">Price</p>
              <h4>$750.00</h4>
            </div>
            <button className="btn btn-order">Order</button>
          </div>
        </div>
        {/* Bike 3 */}
        <div className="bike-select dim">
          <h4>Additional eBike Kit</h4>
          <div className="img-bike">
            <img src={bike1} alt="" />
          </div>
          <div className="order">
            <div className="price">
              <p className="text-soft">Price</p>
              <h4>$250.00</h4>
            </div>
            <button className="btn btn-order">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbikeSection;
