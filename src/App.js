import React, { useEffect } from "react";
import { auth } from "firebase";
import { useStateValue } from "./component/ContextProvider/StateProvider";
import Home from "./component/Login/home";
import Dashboard from "./component/dashboard/Dashboard";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const subscribe = () => {
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
    };
    subscribe();
  });

  return <div className="App">{user ? <Dashboard /> : <Home />}</div>;
}

export default App;
