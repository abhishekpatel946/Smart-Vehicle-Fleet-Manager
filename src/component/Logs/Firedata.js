import React, { useEffect, useState } from "react";
import db from "../firebase/fireConfig";
import Fuel from "../dashboard/Dashboard";

function Firedata() {
  const [speed, setSpeed] = useState([]);

  useEffect(() => {
    db.collection("vehicle")
      .doc("speed_sensor")
      .collection("speed")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setSpeed(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  //   debugging & look into the data
  db.collection("vehicle").onSnapshot(function (doc) {
    console.log("Current Data", doc.data());
  });

  return (
    <div>
      {speed.map(({ speed, timestamp }) => (
        <Fuel speed={speed} timestamp={timestamp} />
      ))}
    </div>
  );
}

export default Firedata;
