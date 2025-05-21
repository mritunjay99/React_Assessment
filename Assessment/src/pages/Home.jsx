/* eslint-disable no-unused-vars */
import getAllHouseInfo from "../api/mockApi";
import { Table } from "antd";

const Home = () => {
  const houseInfo = getAllHouseInfo();
  
  console.log(houseInfo);
  const dataSource = houseInfo;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "CoatOfArms",
      dataIndex: "coatOfArms",
      key: "coatOfArms",
    },
    {
      title: "Words",
      dataIndex: "words",
      key: "words",
    },
  ];
  return (
    <>
      {houseInfo && <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={({ record }) => record?.name}
        bordered
      />}
    </>
  );
};

export default Home;
