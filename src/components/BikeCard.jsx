import "./EbikeSection.css";

const BikeCard = ({ title, bike, dim }) => {
  return (
    <div>
      <div className="bike-select">
        <h4>{title}</h4>
        <div className="img-bike">
          <img src={bike} alt="" />
        </div>
        <div className="order">
          <div className="price">
            <p className="text-soft">Price</p>
            <h4>$750.00</h4>
          </div>
          <button className="btn btn-order">Order</button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
