import { IMAGAE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    // src={
    //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
    //   resData.data.cloudinaryImageId
    // }
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMAGAE_URL + cloudinaryImageId}
      />
      {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
