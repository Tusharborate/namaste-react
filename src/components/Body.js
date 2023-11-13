import RestoComponentLoop, {
  featuredRestoComponent,
  areaRestoComponent,
} from "./RestoComponentLoop";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  const [restaurantArr, setRestaurantArr] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  const [searchVal, setSearchVal] = useState("");

  const RestoComponentPromoted = featuredRestoComponent(RestoComponentLoop);
  const AreaComponent = areaRestoComponent(RestoComponentLoop);
  const { loggedInUser, setUserName } = useContext(UserContext);

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
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-evenly items-stretch flex-wrap">
        {filteredArr.map((restaurant) => {
          console.log(restaurant);
          return restaurant.info.areaName == "Shivajinagar" ? (
            <AreaComponent key={restaurant.info.id} data={restaurant.info} />
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
