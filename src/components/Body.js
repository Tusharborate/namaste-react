import { restoData } from "../utils/mockData";
import restoDataTwo from "../utils/mockData";
import RestoComponent from "./Resto";

const restaurantArr = restoDataTwo.sections.SECTION_SEARCH_RESULT;

const BodyComponent = () => (
  <div className="resto-container">
    {restaurantArr.map((restaurant) => {
      return (
        <RestoComponent key={restaurant.info.resId} data={restaurant.info} />
      );
    })}
  </div>
);

export default BodyComponent;
