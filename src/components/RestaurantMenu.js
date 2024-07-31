import axios from "axios";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_Api } from "../utils/constants";
import { useParams } from "react-router-dom";
import ItemCards from "./ItemCards";
import Carousel from "./Carousel";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await axios.get(MENU_Api + resId);

    setResInfo(response.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards,carousel } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //const itemCard= (itemCards || carousel);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
       {itemCards && <ItemCards itemData={itemCards}/>}
       {carousel && <Carousel itemData={carousel}/>}
    </div>
  );
};

export default RestaurantMenu;
