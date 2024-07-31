import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //  );
    // const json = await data.json();
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(response,data);
    const arr =
      response?.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];
    const arr1 =
      response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ?? [];
    const restaurantList = [...arr, ...arr1];
    // restaurantList.forEach((res) => {
    //   res.info.id = Math.floor(Math.random() * 10000000);
    // });

    setListOfRestaurant(restaurantList);
    setFilteredRestaurant(restaurantList);
  };

  //Conditional Rendering
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={Math.floor(Math.random() * 10000000)}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
