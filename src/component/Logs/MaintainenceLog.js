import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";

function MaintainenceLog() {
  const [maintainenceData, setMaintainenceData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection("vehicle")
      .doc("maintainence")
      .collection("data_records")
      .orderBy("timestamp", "asc")
      .get()
      .then((snapshot) => {
        const maintainance_value = [];
        snapshot.forEach((doc) => {
          maintainance_value.push(doc.data());
        });
        setMaintainenceData(maintainance_value);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      text: "COST",
      dataField: "cost",
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
          data={maintainenceData}
          columns={columns}
          pagination={paginationFactory()}
        />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </div>
  );
}

export default MaintainenceLog;
