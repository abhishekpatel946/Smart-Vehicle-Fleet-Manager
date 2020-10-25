import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

function Table() {
  const [speedData, setSpeedData] = useState([]);

  useEffect(() => {
    db.collection("vehicle")
      .doc("speed_sensor")
      .collection("speed")
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        const speed_value = [];
        snapshot.forEach((doc) => {
          speed_value.push(doc.data());
        });
        setSpeedData(speed_value);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      text: "SPEED",
      dataField: "speed",
    },
    {
      text: "TIMESTAMP",
      dataField: "timestamp",
    },
  ];

  return (
    <div>
      <BootstrapTable
        keyField="timestamp"
        data={speedData}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
}

export default Table;
