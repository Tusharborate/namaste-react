import { restoData } from "../utils/mockData";
import restoDataTwo from "../utils/mockData";
import RestoComponent from "./Resto";
import { useState } from "react";

// let restaurantArr = restoDataTwo.sections.SECTION_SEARCH_RESULT;

const BodyComponent = () => {
  const [restaurantArr, setRestaurantArr] = useState(
    restoDataTwo.sections.SECTION_SEARCH_RESULT
  );
  return (
    <>
      <div className="search-container">
        <button
          value="Search"
          className="filter-btn"
          onClick={() => {
            let tempRestArray = restaurantArr.filter((restaurant) => {
              return restaurant.info.rating.rating_text > 4.1;
            });
            // console.log(tempRestArray);
            setRestaurantArr(tempRestArray);
          }}
        >
          Filter
        </button>
      </div>
      <div className="resto-container">
        {restaurantArr.map((restaurant) => {
          return (
            <RestoComponent
              key={restaurant.info.resId}
              data={restaurant.info}
            />
          );
        })}
      </div>
    </>
  );
};
export default BodyComponent;
