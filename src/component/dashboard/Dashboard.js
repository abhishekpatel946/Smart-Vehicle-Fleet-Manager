import React from "react";
// import { db } from "../firebase/fireConfig";
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
import FuelLog from "../Logs/FuelLog";
import FuelRefillLog from "../Logs/FuelRefillLog";
import MaintainenceLog from "../Logs/MaintainenceLog";
import OverSpeedLog from "../Logs/OversSpeedLog";
import { Layout, Menu, Breadcrumb, Divider } from "antd";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";

// Layout and Menu
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

// define chart props
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// config speed guage
const speedGuageConfigs = {
  type: "angulargauge",
  width: 500,
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
          value: "53",
        },
      ],
    },
  },
};

// config fuel level chat
const fuelLevelChartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
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
        label: "Sat, 18 Oct 2020 10:00:00 GMT",
        value: "50",
      },
      {
        label: "Sat, 18 Oct 2020 12:00:00 GMT",
        value: "45",
      },
      {
        label: "Sat, 18 Oct 2020 14:00:00 GMT",
        value: "40",
      },
      {
        label: "Sat, 18 Oct 2020 16:00:00 GMT",
        value: "35",
      },
      {
        label: "Sat, 18 Oct 2020 18:00:00 GMT",
        value: "30",
      },
    ],
  },
};

// config fuel refill chart
const fuelRefillChartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
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

// config overspeed line with scrolling
Charts(FusionCharts);
const overspeedingSouce = {
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

// config maintainence line with scrolling
Charts(FusionCharts);
const maintainenceSource = {
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
          label: "Sat, 1 Oct 2015 18:30:00 GMT",
        },
        {
          label: "Sat, 10 Oct 2016 18:32:00 GMT",
        },
        {
          label: "Sat, 15 Oct 2017 18:34:00 GMT",
        },
        {
          label: "Sat, 16 Oct 2018 18:36:00 GMT",
        },
        {
          label: "Sat, 20 Oct 2019 18:38:00 GMT",
        },
      ],
    },
  ],
  dataset: [
    {
      data: [
        {
          value: "7000",
        },
        {
          value: "8500",
        },
        {
          value: "8500",
        },
        {
          value: "7000",
        },
        {
          value: "8000",
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
                style={{ padding: 24, minHeight: 760 }}
              >
                {/* Speed Section */}
                <Divider orientation="left">Speed area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFC {...speedGuageConfigs} />
                    </MDBCol>
                    <MDBCol>
                      <SpeedLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                {/* Fuel Section */}
                <Divider orientation="left">Fuel area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFC {...fuelLevelChartConfigs} />
                    </MDBCol>
                    <MDBCol>
                      <FuelLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                {/* Fuel Refill Section */}
                <Divider orientation="left">Fuel Refill area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFC {...fuelRefillChartConfigs} />
                    </MDBCol>
                    <MDBCol>
                      <FuelRefillLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                {/* OverSpeeding Section */}
                <Divider orientation="left">OverSpeeding area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFusioncharts
                        type="scrollline2d"
                        width="100%"
                        height="800%"
                        dataFormat="JSON"
                        dataSource={overspeedingSouce}
                      />
                    </MDBCol>
                    <MDBCol>
                      <OverSpeedLog />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                {/* Maintainence Section */}
                <Divider orientation="left">Maintainance area</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol>
                      <ReactFusioncharts
                        type="scrollline2d"
                        width="100%"
                        height="800%"
                        dataFormat="JSON"
                        dataSource={maintainenceSource}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MaintainenceLog />
                    </MDBCol>
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
