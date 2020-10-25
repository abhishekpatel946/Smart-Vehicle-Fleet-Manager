import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

function Table() {
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
  }, [speedData]);

  console.log(speedData);
  console.log(speedTimestamp);

  const speed_colums = [];
  speedData.forEach((speed) => {
    console.log(speed);
  });
  const time_colums = [];
  speedTimestamp.forEach((time) => {
    console.log(time);
  });

  return (
    <div>
      {/* <BootstrapTable
        keyField="timestamp"
        data={speedData}
        columns={columns}
        pagination={paginationFactory()}
      /> */}
    </div>
  );
}

export default Table;
