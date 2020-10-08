import React from "react";
import fireConfig from "../firebase/fireConfig";
import { Layout, Button, Typography } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Header } = Layout;

class HeaderLayout extends React.Component {
  // logout
  logout() {
    fireConfig.auth().signOut();
  }

  render() {
    return (
      <Layout>
        <Header
          theme="dark"
          className="site-layout-background"
          style={{ padding: 0 }}
        >
          <Title style={{ color: "#EAF0F1", padding: 15 }} level={3}>
            <img
              src="../../assets/Logo.png"
              alt="Logo"
              height="10px"
              width="12px"
            />
            Smart Vehicle Fleet Manager
            <Button
              ghost
              icon={<PoweroffOutlined />}
              onClick={this.logout}
              style={{ float: "right" }}
            >
              Logout
            </Button>
          </Title>
        </Header>
      </Layout>
    );
  }
}

export default HeaderLayout;
