import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBInput,
} from "mdbreact";
import "./home.css";

class Home extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Smart Vehicle Fleet Manager</strong>
                </MDBNavbarBrand>
              </MDBContainer>
            </MDBNavbar>
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                  
              </MDBRow>
            </MDBContainer>
            <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4 white-text">Sign in</p>
                            <div className="white-text">
                            <MDBInput className="white-text" label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                            <MDBInput className="white-text" label="Type your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                            <MDBBtn outline color="white" gradient="blue">Login</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4 white-text">Sign up</p>
                            <div className="white-text">
                            <MDBInput className="white-text" label="Your name" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput className="white-text" label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                            <MDBInput className="white-text" label="Your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                            <MDBBtn outline color="white" gradient="blue">Register</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Home;