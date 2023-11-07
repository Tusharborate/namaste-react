import RestoComponentLoop, {
  featuredRestoComponent,
} from "./RestoComponentLoop";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [restaurantArr, setRestaurantArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  const [searchVal, setSearchVal] = useState("");

  const RestoComponentPromoted = featuredRestoComponent(RestoComponentLoop);

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
      <div className="flex px-2 my-6">
        <input
          type="text"
          className="border-solid border-[1px] border-black py-1 px-2"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button
          className="bg-amber-400 p-3 ml-3 rounded-sm hover:bg-amber-300"
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
          className="bg-amber-400 p-3 ml-3 rounded-sm hover:bg-amber-300"
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
      <div className="flex justify-evenly items-stretch flex-wrap">
        {filteredArr.map((restaurant) => {
          console.log(restaurant);
          return restaurant.info.veg ? (
            <RestoComponentPromoted
              key={restaurant.info.id}
              data={restaurant.info}
            />
          ) : (
            <RestoComponentLoop
              key={restaurant.info.id}
              data={restaurant.info}
            />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
