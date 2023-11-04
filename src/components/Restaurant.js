import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTO_PREFIX_DOMAIN } from "../utils/config.js";
import Shimmer from "./Shimmer.js";

const Restaurant = () => {
  const params = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    restInfo();
  }, []);

  const restInfo = async () => {
    const data = await fetch(
      RESTO_PREFIX_DOMAIN + "&restaurantId=" + params.id
    );
    const dataJSON = await data.json();
    setRestaurantInfo(dataJSON?.data?.cards[0]?.card?.card?.info);
  };

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  console.log(restaurantInfo);
  const { name, costForTwoMessage, locality, avgRating } = restaurantInfo;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Cost: {costForTwoMessage} persons</p>
      <p>Locality: {locality}</p>
      <p>Average Rating: {avgRating}</p>
    </div>
  );
};

export default Restaurant;
