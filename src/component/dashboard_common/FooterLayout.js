import React from "react";
import { Layout, Typography } from "antd";
// import Link from "@material-ui/core/Link";

const { Footer } = Layout;
const { Title } = Typography;
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

        {/* footer greeting;s */}
        <Title style={{ color: "#EAF0F1", padding: 5 }} level={3}>
          Smart Vehicle Fleet Manager
        </Title>
        <Title style={{ color: "#b2bec3" }} level={5}>
          © All rights are resevered | {date} <br />
          Made with <i className="icon ion-heart fa-2x text-danger"></i> by
          India.
        </Title>

        {/* fork me ribbon */}
        {/* <Link href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager">
            <img loading="lazy" width="149" height="149" src="https://  github.blog/wp-content/uploads/2008/12/ forkme_right_white_ffffff.png?resize=149%2C149"  class="attachment-full size-full" alt="Fork me on GitHub"  data-recalc-dims="1">
          </Link> */}
      </Footer>
    );
  }
}

export default FooterLayout;
