import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

function OverSpeedLog() {
  const [overSpeedData, setOverSpeedData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection("vehicle")
      .doc("overspeed_sensor")
      .collection("overspeed")
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        const overSpeed_value = [];
        snapshot.forEach((doc) => {
          overSpeed_value.push(doc.data());
        });
        setOverSpeedData(overSpeed_value);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      text: "OVERSPEED",
      dataField: "speed",
    },
    {
      text: "TIMESTAMP",
      dataField: "timestamp",
    },
  ];

  return (
    <div>
      {loading ? (
        <BootstrapTable
          keyField="timestamp"
          data={overSpeedData}
          columns={columns}
          pagination={paginationFactory()}
        />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </div>
  );
}

export default OverSpeedLog;
