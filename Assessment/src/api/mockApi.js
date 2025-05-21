/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../stores/dataSlice";

const getAllHouseInfo = () => {
  const [houseInfo, setHouseInfo] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    const data = await fetch("https://www.anapioficeandfire.com/api/houses");
    const json = await data.json();

    setHouseInfo(json);
    dispatch(addData(json));
  };
  return houseInfo;
};

export default getAllHouseInfo;
