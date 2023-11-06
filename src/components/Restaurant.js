import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestInfo from "../utils/useRestInfo.js";
import { useEffect, useState } from "react";

const Restaurant = () => {
  const { id } = useParams();
  const restaurantInfo = useRestInfo(id);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, locality, avgRating } =
    restaurantInfo?.cards[0]?.card?.card?.info;

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
