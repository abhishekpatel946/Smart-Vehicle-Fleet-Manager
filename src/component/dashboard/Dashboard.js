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
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdbreact";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import "./Dashboard.css";

// Layout and Menu
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
class Dashboard extends React.Component {
  // navbar collapse state
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
    console.log(collapsed);
  };

  // form validation state
  state = {
    vehicleName: "",
    vehicleId: "",
  };
  // form onSubmit handler
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };
  // form onChange handler
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
              <Menu.Item key="addVehicle" icon={<AppstoreAddOutlined />}>
                Add Vehicle
              </Menu.Item>
              <Menu.Item key="report" icon={<FileOutlined />}>
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

                {/* addVehicle Section */}
                <Divider orientation="left">Add Vehicle</Divider>
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <form
                        className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate
                      >
                        <p className="h5 text-center mb-4">Subscribe</p>
                        <div className="grey-text">
                          <MDBInput
                            value={this.state.vehicleName}
                            name="vehicleName"
                            onChange={this.changeHandler}
                            label="Your vehicle name"
                            icon="car"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid input.
                          </div>
                          <div className="valid-feedback">Looks good!</div>
                          <MDBInput
                            value={this.state.vehicleId}
                            name="vehicleId"
                            onChange={this.changeHandler}
                            label="Your vechile reg. number"
                            icon="registered"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            required
                          />
                        </div>
                        <div className="text-center">
                          <MDBBtn outline type="submit">
                            Register
                            <MDBIcon far icon="paper-plane" className="ml-1" />
                          </MDBBtn>
                        </div>
                      </form>
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
