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
import Pagination from "../Logs/Pagination";
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
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
      {
        label: "Venezuela",
        value: "290",
      },
      {
        label: "Saudi",
        value: "260",
      },
      {
        label: "Canada",
        value: "180",
      },
      {
        label: "Iran",
        value: "140",
      },
      {
        label: "Russia",
        value: "115",
      },
      {
        label: "UAE",
        value: "100",
      },
      {
        label: "US",
        value: "30",
      },
      {
        label: "China",
        value: "30",
      },
    ],
  },
};

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
          value: "68",
        },
      ],
    },
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
          label: "1994",
        },
        {
          label: "1995",
        },
        {
          label: "1996",
        },
        {
          label: "1997",
        },
        {
          label: "1998",
        },
        {
          label: "1999",
        },
        {
          label: "2000",
        },
        {
          label: "2001",
        },
        {
          label: "2002",
        },
        {
          label: "2003",
        },
        {
          label: "2004",
        },
        {
          label: "2005",
        },
        {
          label: "2006",
        },
        {
          label: "2007",
        },
        {
          label: "2008",
        },
        {
          label: "2009",
        },
        {
          label: "2010",
        },
        {
          label: "2011",
        },
        {
          label: "2012",
        },
        {
          label: "2013",
        },
        {
          label: "2014",
        },
        {
          label: "2015",
        },
        {
          label: "2016",
        },
        {
          label: "2017",
        },
      ],
    },
  ],
  dataset: [
    {
      data: [
        {
          value: "15622",
        },
        {
          value: "10612",
        },
        {
          value: "15820",
        },
        {
          value: "26723",
        },
        {
          value: "35415",
        },
        {
          value: "25555",
        },
        {
          value: "81803",
        },
        {
          value: "47950",
        },
        {
          value: "42396",
        },
        {
          value: "19435",
        },
        {
          value: "9780",
        },
        {
          value: "23243",
        },
        {
          value: "28619",
        },
        {
          value: "8477",
        },
        {
          value: "3503",
        },
        {
          value: "14278",
        },
        {
          value: "30522",
        },
        {
          value: "61518",
        },
        {
          value: "24819",
        },
        {
          value: "16437",
        },
        {
          value: "21171",
        },
        {
          value: "1690",
        },
        {
          value: "2418",
        },
        {
          value: "11253",
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
                      <Pagination />
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
                      <Pagination />
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
                      <Pagination />
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

function Fuel({ level, timestamp }) {
  console.log({ level, timestamp });
  return (
    <div>
      <h4>
        {level} {timestamp}
        <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
      </h4>
    </div>
  );
}

export default Dashboard;
