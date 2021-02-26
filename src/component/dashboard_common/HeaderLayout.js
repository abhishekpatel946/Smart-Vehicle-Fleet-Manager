import React, { useState } from "react";
import fireConfig from "../firebase/fireConfig";
import { Layout, Button, Typography } from "antd";
import { Menu, Dropdown } from "antd";
import { PoweroffOutlined, CarOutlined } from "@ant-design/icons";
import { useStateValue } from "../ContextProvider/StateProvider";
import { db } from "../firebase/fireConfig";

const { Title } = Typography;
const { Header } = Layout;

function HeaderLayout() {
  const [{ user }] = useStateValue();
  const [vehicles, setVehicles] = useState([]);

  // fetch vehicles from database
  db.collection("data")
    .get()
    .then((snapshot) => {
      const vehicle_value = [];
      snapshot.forEach((doc) => {
        vehicle_value.push(doc.data());
      });
      setVehicles(vehicle_value);
    })
    .catch((error) => console.log(error));

  // vehicle switcher
  const menu = (
    <Menu>
      <Menu.Item>vehicles{vehicles}</Menu.Item>
    </Menu>
  );

  // logout
  const logout = () => {
    fireConfig.auth().signOut();
  };

  return (
    <Layout>
      <Header
        theme="dark"
        className="site-layout-background"
        style={{ padding: 0 }}
      >
        <Title style={{ color: "#EAF0F1", padding: 15 }} level={3}>
          Smart Vehicle Fleet Manager
          <Button
            ghost
            icon={<PoweroffOutlined />}
            onClick={logout}
            style={{
              float: "right",
              margin: "auto 20px auto 20px",
            }}
          />
          <Dropdown
            overlay={menu}
            placement="bottomCenter"
            arrow
            style={{
              float: "right",
              margin: "auto 20px auto 20px",
            }}
          >
            <Button
              ghost
              icon={<CarOutlined />}
              style={{
                float: "right",
                margin: "auto 20px auto 20px",
              }}
            >
              Swithcer
            </Button>
          </Dropdown>
          <span
            style={{
              float: "right",
              fontSize: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {user?.displayName || user?.email}
          </span>
        </Title>
      </Header>
    </Layout>
  );
}

export default HeaderLayout;
