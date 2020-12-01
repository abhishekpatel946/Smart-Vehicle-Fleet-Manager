import React from "react";
import fireConfig from "../firebase/fireConfig";
import { Layout, Button, Typography } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useStateValue } from "../ContextProvider/StateProvider";

const { Title } = Typography;
const { Header } = Layout;

function HeaderLayout() {
  const [{ user }] = useStateValue();

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
          <span
            style={{
              float: "right",
              fontSize: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {user?.email}
          </span>
          <Button
            ghost
            icon={<PoweroffOutlined />}
            onClick={logout}
            style={{ float: "right" }}
          >
            Logout
          </Button>
        </Title>
      </Header>
    </Layout>
  );
}

export default HeaderLayout;
