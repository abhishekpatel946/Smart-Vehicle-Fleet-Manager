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
  MDBAnimation,
  MDBTypography,
  MDBCardHeader,
  MDBIcon,
} from "mdbreact";
import "./home.css";
import fireConfig from "../firebase/fireConfig";

function Home() {
  // login
  const login = () => {
    const email = document.querySelector("#login_email").value;
    const password = document.querySelector("#login_password").value;

    fireConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((event) => {
        console.log(event.message);
        // alert('Successful loggedIn...');
      })
      .catch((err) => {
        console.log("Error" + err.toString());
        alert(err.message);
      });
  }

  // forgot password
  const forgotPass = () => {
    const email = document.querySelector("#login_email").value;

    fireConfig
      .auth().sendPasswordResetEmail(email)
      .then(function (user) {
      alert('Please check your email...')
    }).catch(function (err) {
      console.log(err)
      alert(err.message)
    })
  }


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
                  <MDBCol>
                  <MDBTypography tag='h3' variant="h3-responsive" style={{ color: "#EAF0F1" }}>Smart Vehicle Fleet Manager</MDBTypography>
                  </MDBCol>
                </MDBNavbarBrand>
              </MDBContainer>
            </MDBNavbar>
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                    <img
                      src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                      alt=''
                      className='img-fluid'
                      style={{ padding: "40px", marginTop: "200px" }}
                    />
                  </MDBAnimation>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                      Log in
                    </h3>
                  </MDBRow>
                  <form>
                    <div className="white-text">
                      <MDBInput
                        className="white-text"
                        label="Type your email"
                        icon="envelope"
                        id="login_email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        className="white-text"
                        label="Type your password"
                        icon="lock"
                        id="login_password"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        gradient="blue"
                        onClick={login}
                      >
                        Login
                      </MDBBtn>
                      <MDBBtn
                        gradient="peach"
                        onClick={forgotPass}
                      >
                        Forgot Pass
                      </MDBBtn>
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

export default Home;
