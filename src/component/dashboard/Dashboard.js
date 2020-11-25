import React from "react";
import fireConfig from "../firebase/fireConfig";
import HeaderLayout from "../dashboard_common/HeaderLayout";
import FooterLayout from "../dashboard_common/FooterLayout";
import SpeedLog from "../Logs/SpeedLog";
import FuelLog from "../Logs/FuelLog";
import FuelRefillLog from "../Logs/FuelRefillLog";
import MaintainenceLog from "../Logs/MaintainenceLog";
import OverSpeedLog from "../Logs/OverSpeedLog";
import { Layout, Menu, Breadcrumb, Divider } from "antd";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import "./Dashboard.css";

// Layout and Menu
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
class Dashboard extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
    console.log(collapsed);
  };

  // logout
  logout() {
    fireConfig.auth().signOut();
  }

  render() {
    return (
      <Layout>
        {/* Header Section */}
        <HeaderLayout />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={["stats"]}
              defaultOpenKeys={[""]}
              mode="inline"
            >
              <Menu.Item key="stats" icon={<PieChartOutlined />}>
                Stats
              </Menu.Item>
              <SubMenu key="track" icon={<DesktopOutlined />} title="Track">
                <Menu.Item key="speed">Speed</Menu.Item>
                <Menu.Item key="fuel">Fuel</Menu.Item>
                <Menu.Item key="fuel_refill">Fuel Refill</Menu.Item>
                <Menu.Item key="overspeeding">OverSpeeding</Menu.Item>
                <Menu.Item key="maintainance">Maintainance</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Report
              </Menu.Item>
            </Menu>
          </Sider>

          {/* Breadcrum Naming */}
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Abhishek</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 560 }}
              >
                {/* Speed Section */}
                <Divider orientation="left">Speed area</Divider>
                <MDBContainer>
                  <SpeedLog />
                </MDBContainer>

                {/* Fuel Section */}
                <Divider orientation="left">Fuel area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <FuelLog />
                  </MDBRow>
                </MDBContainer>

                {/* OverSpeeding Section */}
                <Divider orientation="left">OverSpeeding area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <OverSpeedLog />
                  </MDBRow>
                </MDBContainer>

                {/* Fuel Refill Section */}
                <Divider orientation="left">Fuel Refill area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <FuelRefillLog />
                  </MDBRow>
                </MDBContainer>

                {/* Maintainence Section */}
                <Divider orientation="left">Maintainance area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MaintainenceLog />
                  </MDBRow>
                </MDBContainer>

                {/* End */}
              </div>
            </Content>
            <FooterLayout />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
// // >>>>>>> b6011353de8f7552514b0ce4f987931b8b442d3d
