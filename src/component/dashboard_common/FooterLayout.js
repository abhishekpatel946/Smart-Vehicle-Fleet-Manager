import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class FooterLayout extends React.Component {
  render() {
    return (
      <Footer
        style={{ background: "#282c34", color: "white", textAlign: "center" }}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        Made with <i className="icon ion-heart"></i> by Abhishek. Copyright@2020
        reseverd by Smart Vehicle Fleet Manager.
      </Footer>
    );
  }
}

export default FooterLayout;
