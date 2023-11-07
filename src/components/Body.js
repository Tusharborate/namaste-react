import RestoComponent from "./Resto";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [restaurantArr, setRestaurantArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  const [searchVal, setSearchVal] = useState("");
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

    setFilteredArr(
      resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurantArr.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-field"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const tempSearchArray = restaurantArr.filter((restaurant) => {
              return restaurant.info.name
                .toLowerCase()
                .includes(searchVal.toLowerCase());
            });
            setFilteredArr(tempSearchArray);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const tempRestArray = restaurantArr.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });
            setFilteredArr(tempRestArray);
          }}
        >
          Filter
        </button>
      </div>
      <div className="flex justify-around flex-wrap">
        {filteredArr.map((restaurant) => {
          return (
            <RestoComponent key={restaurant.info.id} data={restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
