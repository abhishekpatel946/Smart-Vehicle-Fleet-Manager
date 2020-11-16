import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

function FuelRefillLog() {
  const [fuelRefillData, setFuelRefillData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection("vehicle")
      .doc("fuel_refill_sensor")
      .collection("fuel_refill")
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        const fuleRefill_value = [];
        snapshot.forEach((doc) => {
          fuleRefill_value.push(doc.data());
        });
        setFuelRefillData(fuleRefill_value);
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
          data={fuelRefillData}
          columns={columns}
          pagination={paginationFactory()}
        />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </div>
  );
}

export default FuelRefillLog;
