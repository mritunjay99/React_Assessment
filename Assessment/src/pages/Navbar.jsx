import React from "react";
import { Menu, Layout, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col xs={20} sm={20} md={10} lg={8}>
          <div>Logo</div>
        </Col>
        <Col xs={4} sm={4} md={14} lg={16}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            overflowedIndicator={<MenuOutlined />}
          >
            <Menu.Item key="home">
              <Link to={"/home"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to={"/"}>About</Link>
            </Menu.Item>
            <Menu.Item key="services">Services</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
