import React, { useEffect } from "react";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import { auth } from "firebase";
import Home from "./component/Login/home";
import { useStateValue } from "./component/ContextProvider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // generate a unique userId for each user
        // console.log(`user id ==>> ${authUser.uid}`);

        // the user just logged-in | the user was logged-in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged-out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return <div className="App">{user ? <Dashboard /> : <Home />}</div>;
}

export default App;
