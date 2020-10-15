import React from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFusioncharts from "react-fusioncharts";
import fireConfig from "../firebase/fireConfig";
import HeaderLayout from "../dashboard_common/HeaderLayout";
import FooterLayout from "../dashboard_common/FooterLayout";
import SpeedLog from "../Logs/SpeedLog";
import FuelRefillLog from "../Logs/FuelRefillLog";
import OverSpeedLog from "../Logs/OversSpeedLog";
import { Layout, Menu, Breadcrumb, Divider, Row, Col } from "antd";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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

// define chart props
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// config simple guage
const simpleGuageConfigs = {
  type: "angulargauge",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Vehicle Speed In [KMPH]",
      lowerLimit: "0",
      upperLimit: "100",
      showValue: "1",
      numberSuffix: "%",
      theme: "fusion",
      showToolTip: "0",
    },
    colorRange: {
      color: [
        {
          minValue: "0",
          maxValue: "50",
          code: "#62B58F",
        },
        {
          minValue: "50",
          maxValue: "75",
          code: "#FFC533",
        },
        {
          minValue: "75",
          maxValue: "100",
          code: "#F2726F",
        },
      ],
    },
    dials: {
      dial: [
        {
          value: "20",
        },
      ],
    },
  },
};

// config simple_chart
const simpleChartConfigs = {
  type: "column2d",
  width: 600,
  height: 300,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Vehicle Fuel level In [litre]",
      subCaption: "In litres",
      xAxisName: "Timestamp",
      yAxisName: "Fuel (litre)",
      numberSuffix: "Lt.",
      theme: "fusion",
    },
    data: [
      {
        label: "Sat, 10 Oct 2020 18:30:00 GMT",
        value: "50",
      },
      {
        label: "Sat, 12 Oct 2020 18:32:00 GMT",
        value: "50",
      },
      {
        label: "Sat, 14 Oct 2020 18:34:00 GMT",
        value: "50",
      },
      {
        label: "Sat, 16 Oct 2020 18:36:00 GMT",
        value: "50",
      },
      {
        label: "Sat, 18 Oct 2020 18:38:00 GMT",
        value: "50",
      },
    ],
  },
};

// config line with scrolling
Charts(FusionCharts);
const dataSource = {
  chart: {
    caption: "Vehicle OverSpeeding Instaces",
    subcaption: "(As per recommended)",
    showvalues: "0",
    numvisibleplot: "12",
    plottooltext: "<b>$dataValue</b> Speed of Vehicle at $label",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "Sat, 1 Oct 2020 18:30:00 GMT",
        },
        {
          label: "Sat, 10 Oct 2020 18:32:00 GMT",
        },
        {
          label: "Sat, 15 Oct 2020 18:34:00 GMT",
        },
        {
          label: "Sat, 16 Oct 2020 18:36:00 GMT",
        },
        {
          label: "Sat, 20 Oct 2020 18:38:00 GMT",
        },
      ],
    },
  ],
  dataset: [
    {
      data: [
        {
          value: "70",
        },
        {
          value: "85",
        },
        {
          value: "85",
        },
        {
          value: "70",
        },
        {
          value: "80",
        },
      ],
    },
  ],
};

class Dashboard extends React.Component {
  state = {
    collapsed: true,
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
                <Divider orientation="left">Speed area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Accelerometer</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Speed history</div>
                  </Col>
                </Row>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFC {...simpleGuageConfigs} />
                    </MDBCol>
                    <MDBCol>
                      <SpeedLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <Divider orientation="left">Fuel area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Location history</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Fuel Level Sensor</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Fuel refill history</div>
                  </Col>
                </Row>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFC {...simpleChartConfigs} />
                    </MDBCol>
                    <MDBCol>
                      <FuelRefillLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <Divider orientation="left">OverSpeeding area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>OverSpeeding instances</div>
                  </Col>

                  <Col className="gutter-row" span={6}>
                    <div style={style}>Emergency Button</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Turn-Off Button</div>
                  </Col>
                </Row>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFusioncharts
                        type="scrollline2d"
                        width="100%"
                        height="300%"
                        dataFormat="JSON"
                        dataSource={dataSource}
                      />
                    </MDBCol>
                    <MDBCol>
                      <OverSpeedLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <Divider orientation="left">Maintainance area</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Accident alert</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>Total distance travelled</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div style={style}>GPS</div>
                  </Col>
                  <Fuel />
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

function Fuel({ timestamp }) {
  // look into the console; why it is undefined?
  console.log({ timestamp });
  return (
    <div>
      <h4>
        {timestamp}
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
      </h4>
    </div>
  );
}

export default Dashboard;
