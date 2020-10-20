import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { db } from "../firebase/fireConfig";

export default function SpeedLog() {
  const [speedData, setSpeedData] = useState([]);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = db
      .collection("vehicle")
      .doc("speed_sensor")
      .collection("speed")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setSpeedData(snapshot.docs.map((doc) => doc.data()));
      });
    return () => {
      unsubscribe();
    };
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
    // { speedData.map((index) => (
    rows: [
      {
        timestamp: "Sat, 10 Oct 2020 18:30:00 GMT",
        speed: "0",
      },
    ],
    // ))}
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={setDatatable}
      fullPagination
    />
  );
}
