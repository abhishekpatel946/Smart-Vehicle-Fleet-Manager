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
import fireConfig from '../firebase/fireConfig';

class Home extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  login(){
    const email = document.querySelector("#login_email").value;
    const password = document.querySelector("#login_password").value;

    fireConfig.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
          console.log("Successfully loggedIn.!!!");
          alert('Successful LoggedIn...!!!');
        })
        .catch((err) => {
          console.log("Error" + err.toString());
          alert('Incorrect Username or Password...!');
        })
    }

    signUp(e) {
      const email = document.querySelector("#register_email").value;
      const password = document.querySelector("#register_password").value;
  
      fireConfig.auth().createUserWithEmailAndPassword(email, password)
          .then((u) => {
              console.log("Successfully Registered.!!!");
              alert('Successfully Registered.!!!"');
          })
          .catch((err) => {
              console.log("Error" + err.toString());
              alert('Incorrect Username or Password...!');
        })
    }

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
                            <MDBInput 
                              className="white-text" 
                              label="Type your email" 
                              icon="envelope"
                              id="login_email" 
                              group type="email" 
                              validate error="wrong" 
                              success="right" />
                            <MDBInput 
                              className="white-text" 
                              label="Type your password" 
                              icon="lock" 
                              id="login_password"
                              group type="password" 
                              validate />
                            </div>
                            <div className="text-center">
                            <MDBBtn 
                              // outline color="white" 
                              gradient="blue"
                              onClick={this.login}
                            >Login</MDBBtn>
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
                            <MDBInput 
                              className="white-text" 
                              label="Your name" 
                              icon="user" 
                              group type="text" 
                              validate error="wrong"
                              success="right" />
                            <MDBInput 
                              className="white-text" 
                              label="Your email" 
                              icon="envelope" 
                              id="register_email" 
                              group type="email" 
                              validate error="wrong"
                              success="right" />
                            <MDBInput 
                              className="white-text" 
                              label="Your password" 
                              icon="lock" 
                              id="register_password" 
                              group type="password" 
                              validate />
                            </div>
                            <div className="text-center">
                            <MDBBtn 
                              // outline color="white" 
                              gradient="blue"
                              onClick={this.signUp}
                            >Register</MDBBtn>
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