/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../stores/dataSlice";

const getAllHouseInfo = () => {
  const [houseInfo, setHouseInfo] = useState(null);
  const houseList = useSelector((state) => {
    return state.data.items;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAll();
  }, []);
  const fetchAll = async () => {
    if (houseList.length != 0) {
      setHouseInfo(houseList[0]);
    } else {
      const data = await fetch("https://www.anapioficeandfire.com/api/houses");
      const json = await data.json();

      setHouseInfo(json);
      dispatch(addData(json));
    }
  };
  return houseInfo;
};

export default getAllHouseInfo;
