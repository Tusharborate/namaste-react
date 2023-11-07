import { useEffect, useState } from "react";
import { RESTO_PREFIX_DOMAIN } from "../utils/config.js";

const useRestInfo = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    getRestInfo();
  }, []);

  const getRestInfo = async () => {
    const res = await fetch(RESTO_PREFIX_DOMAIN + "&restaurantId=" + resId);
    const resData = await res.json();
    setResData(resData.data);
  };

  return resData;
};

export default useRestInfo;
