import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

function FuelLog() {
  const [fuelData, setFuelData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection("vehicle")
      .doc("fuel_sensor")
      .collection("fuel")
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        const fuel_value = [];
        snapshot.forEach((doc) => {
          fuel_value.push(doc.data());
        });
        setFuelData(fuel_value);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      text: "AMOUNT",
      dataField: "amount",
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
          data={fuelData}
          columns={columns}
          pagination={paginationFactory()}
        />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </div>
  );
}

export default FuelLog;
