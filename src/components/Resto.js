import { CLOUD_URL } from "../utils/config";
import { Link } from "react-router-dom";

const RestoComponent = (props) => {
  const { id, cloudinaryImageId, name, locality, cuisines, avgRating } =
    props.data;
  return (
    <div className="resto-card">
      <Link to={"/restaurants/" + id}>
        <img
          className="resto-img"
          src={CLOUD_URL + cloudinaryImageId}
          alt="Pizza Hut"
        />
        <div className="resto-card-content">
          <h3 className="resto-title">{name}</h3>
          <p className="resto-options">{cuisines.join(", ")}</p>
          <p className="resto-location">{locality}</p>
          <p className="resto-ratings">{avgRating}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestoComponent;
