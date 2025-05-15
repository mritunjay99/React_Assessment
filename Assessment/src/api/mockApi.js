/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

const getAllHouseInfo = () => {
  const [houseInfo, setHouseInfo] = useState(null);
  useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    const data = await fetch("https://www.anapioficeandfire.com/api/houses");
    const json = await data.json();

    setHouseInfo(json);
  };
  return houseInfo;
};

export default getAllHouseInfo;
