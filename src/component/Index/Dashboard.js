import React from "react";
import fireConfig from "../firebase/fireConfig";
import HeaderLayout from "../dashboard/HeaderLayout";
import FooterLayout from "../dashboard/FooterLayout";
import { Layout, Menu, Breadcrumb, Divider, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

const style = {
  textAlign: "center",
  color: "white",
  background: "#192A56",
  padding: "16px 0",
};
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // logout
  logout() {
    fireConfig.auth().signOut();
  }

  render() {
    return (
      <Layout>
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
              defaultOpenKeys={["track"]}
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
          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Abhishek</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 760 }}
              >
                <Divider orientation="left">Chart;s area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>GPS</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Accelerometer</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Fuel Level Sensor</div>
                  </Col>
                </Row>

                <Divider orientation="left">Log;s area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Location history</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Speed history</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Total distance travelled</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Fuel refill history</div>
                  </Col>
                </Row>

                <Divider orientation="left">Button;s area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Emergency Button</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Turn-Off Button</div>
                  </Col>
                </Row>

                <Divider orientation="left">Notification;s area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Accident alert</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>OverSpeeding instances</div>
                  </Col>
                </Row>
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
