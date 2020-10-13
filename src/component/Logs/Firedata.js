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

  return (
    <div>
      {setSpeed.map(({ speed, timestamp }) => (
        <Fuel level={speed} timestamp={timestamp} />
      ))}
    </div>
  );
}

export default Firedata;
