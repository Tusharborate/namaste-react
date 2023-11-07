import { CLOUD_URL } from "../utils/config";
import { Link } from "react-router-dom";

const RestoComponent = (props) => {
  const { id, cloudinaryImageId, name, locality, cuisines, avgRating } =
    props.data;
  return (
    <div className="w-[250px] border-solid border-[1px] border-black mb-3 hover:bg-pink-50">
      <Link to={"/restaurants/" + id}>
        <img
          className="h-60 w-full"
          src={CLOUD_URL + cloudinaryImageId}
          alt="Pizza Hut"
        />
        <div className="p-2">
          <h3 className="font-bold pb-1">{name}</h3>
          <p className="resto-options">{cuisines.join(", ")}</p>
          <p className="resto-location">{locality}</p>
          <p className="resto-ratings">{avgRating}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestoComponent;
