import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories.js";
import Shimmer from "./Shimmer.js";
import useRestInfo from "../utils/useRestInfo.js";
import { useEffect, useState } from "react";

const Restaurant = () => {
  const { id } = useParams();
  const restaurantInfo = useRestInfo(id);

  const [showIndex, setShowIndex] = useState(null);
  const restaurantCat =
    restaurantInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  if (restaurantInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, locality, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const restaurantCategories = restaurantCat.filter((restaurant) => {
    return (
      restaurant.card.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="w-8/12 bg- mx-auto mt-6">
      <div className="mb-2">
        <h2 className="font-bold mb-2 text-xl">{name}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{locality}</h3>
        <h3>{avgRating}</h3>
      </div>
      <div className="mb-2">
        {restaurantCategories.map((restaurant, index) => {
          return (
            <RestaurantCategories
              key={restaurant.card.card.title}
              data={restaurant}
              showItems={index === showIndex ? true : false}
              setShowIndexChild={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurant;
