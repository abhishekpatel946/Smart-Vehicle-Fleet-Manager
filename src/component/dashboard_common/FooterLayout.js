import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class FooterLayout extends React.Component {
  render() {
    const date = new Date().getFullYear();
    return (
      <Footer
        style={{ background: "#282c34", color: "white", textAlign: "center" }}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        Made with <i className="icon ion-heart fa-2x text-danger"></i> by India.
        Copyright ©{date} reseverd by Smart Vehicle Fleet Manager.
      </Footer>
    );
  }
}

export default FooterLayout;
