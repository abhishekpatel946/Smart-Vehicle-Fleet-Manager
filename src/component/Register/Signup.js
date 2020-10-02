import React from 'react';
import fireConfig from '../firebase/fireConfig';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, } from 'mdbreact';
import './Login.css';


class Signup extends React.Component {
    

    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fireConfig.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log("Successfully Signup.!!!");
            })
            .catch((err) => {
                console.log("Error" + err.toString());
            })
    }


    render() {
        return (
            <div className="Signup">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign up</p>
                            <div className="grey-text">
                            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                                success="right" />
                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                                success="right" />
                            <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                                error="wrong" success="right" />
                            <MDBInput label="Your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                            <MDBBtn color="primary">Register</MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div> 
        )
    }
}

export default Signup;