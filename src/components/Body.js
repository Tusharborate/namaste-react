import RestoComponent from "./Resto";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [restaurantArr, setRestaurantArr] = useState([]);

  useEffect(() => {
    getRestoData();
  }, []);

  const getRestoData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await apiData.json();

    setRestaurantArr(
      resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurantArr.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <button
          value="Search"
          className="filter-btn"
          onClick={() => {
            let tempRestArray = restaurantArr.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });
            setRestaurantArr(tempRestArray);
          }}
        >
          Filter
        </button>
      </div>
      <div className="resto-container">
        {restaurantArr.map((restaurant) => {
          // console.log(restaurant);
          return (
            <RestoComponent key={restaurant.info.id} data={restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
