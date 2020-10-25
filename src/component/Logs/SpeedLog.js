import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { db } from "../firebase/fireConfig";

export default function SpeedLog() {
  // const [speedData, setSpeedData] = useState([]);

  // useEffect(() => {
  //   let unsubscribe;
  //   unsubscribe = db
  //     .collection("vehicle")
  //     .doc("speed_sensor")
  //     .collection("speed")
  //     .orderBy("time stamp", "asc")
  //     .onSnapshot((snapshot) => {
  //       setSpeedData(snapshot.docs.map((doc) => doc.data()));
  //     });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const [speedData, setSpeedData] = useState([]);
  const [speedTimestamp, setSpeedTimestamp] = useState([]);

  useEffect(() => {
    db.collection("vehicle")
      .doc("speed_sensor")
      .collection("speed")
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        const speed_value = [];
        const speed_time = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          speed_value.push(data.speed);
          speed_time.push(data.timestamp.toDate().toUTCString());
        });
        setSpeedData(speed_value);
        setSpeedTimestamp(speed_time);
      })
      .catch((error) => console.log(error));
  }, []);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Timestamp",
        field: "timestamp",
        width: 50,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Timestamp",
        },
      },
      {
        label: "Speed",
        field: "speed",
        width: 40,
      },
    ],

    rows: [
      {
        speed: "speed",
        timestamp: "timestamp",
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 25, 50]}
      entries={5}
      pagesAmount={4}
      data={setDatatable}
      fullPagination
    />
  );
}
