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
          <Button
            ghost
            icon={<PoweroffOutlined />}
            onClick={logout}
            style={{
              float: "right",
              margin: "auto 20px auto 20px",
            }}
          />
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
