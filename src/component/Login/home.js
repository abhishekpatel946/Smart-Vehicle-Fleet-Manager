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
} from "mdbreact";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./home.css";
import fireConfig from "../firebase/fireConfig";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home() {
  // snakbar state
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [openSignInError, setOpenSignInError] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
    setOpenSignInError(false);
  };

  // login
  const login = () => {
    const email = document.querySelector("#login_email").value;
    const password = document.querySelector("#login_password").value;

    fireConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setOpenSuccess(false);
        setOpenError(false);
        setOpenSignInError(false);
        console.log("SignedIN succeed!!!");
      })
      .catch((err) => {
        setOpenSuccess(false);
        setOpenError(false);
        setOpenSignInError(true);
      });
  };

  // forgot password
  const forgotPass = () => {
    const email = document.querySelector("#login_email").value;

    fireConfig
      .auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        setOpenError(false);
        setOpenSignInError(false);
        setOpenSuccess(true);
      })
      .catch(function (err) {
        setOpenSuccess(false);
        setOpenSignInError(false);
        setOpenError(true);
      });
  };

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
                  <MDBTypography
                    tag="h3"
                    variant="h3-responsive"
                    style={{ color: "#EAF0F1" }}
                  >
                    Smart Vehicle Fleet Manager
                  </MDBTypography>
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
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <img
                  src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                  alt=""
                  className="img-fluid"
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
                    <MDBBtn gradient="blue" onClick={login}>
                      Login
                    </MDBBtn>
                    <MDBBtn gradient="peach" onClick={forgotPass}>
                      Forgot Pass
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Please check your email for instructions on how to reset your
          password...!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Incorrect email, Please type correct email and hit the forgot
          button...!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSignInError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Incorrect username and password. Please Try again...!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
