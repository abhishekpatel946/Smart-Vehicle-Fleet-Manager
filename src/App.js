import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }} >
        <Title style={{background: 'white'}} level={3}>Abhishek</Title>
        </Header>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Stats
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Track
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Abhishek</Menu.Item>
                  <Menu.Item key="4">Ashutosh</Menu.Item>
                  <Menu.Item key="5">Muskan</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}> Report </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Abhishek</Breadcrumb.Item>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  AREA 51....
                </div>
              </Content>
              <Footer theme="dark" style={{ textAlign: 'center' }}>Ant Design ©2020 Created by DEV.Abhishek</Footer>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}


export default App;
