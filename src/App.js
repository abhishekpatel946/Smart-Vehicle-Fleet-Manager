import React from "react";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import firebase from "firebase";
// import { db } from "./component/firebase/fireConfig";
import Home from "./component/Login/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListner = this.authListner.bind(this);
  }

  // speed state
  state = {
    speeds: null,
  };

  // Mount the firestore
  componentDidMount() {
    this.authListner();

    // console.log("mounted");
    // db.collection("vehicle")
    //   .doc("speed_sensor")
    //   .collection("speed")
    //   .get()
    //   .then((snapshot) => {
    //     const speed_data = [];
    //     snapshot.forEach((doc) => {
    //       const data = doc.data();
    //       speed_data.push(data);
    //     });
    //     this.setState({ speeds: speed_data });
    //     console.log(`Speed : ${speed_data}`);
    //   })
    //   .catch((error) => console.log(error));
  }

  authListner() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? <Dashboard /> : <Home />}
        {/* {this.state.speed &&
          this.state.speeds.map((speed_data) => {
            return (
              <div>
                <p> Here is speed... </p>
                <p>{speed_data.speed}</p>
              </div>
            );
          })} */}
      </div>
    );
  }
}

export default App;
