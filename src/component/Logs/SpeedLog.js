import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";

function SpeedLog() {
  // define chart props
  ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

  const [speedData, setSpeedData] = useState([]);
  const [loading, setLoading] = useState(false);

  var lastItem;
  var lastSpeed = 0;

  useEffect(() => {
    db.collection("vehicle")
      .doc("speed_sensor")
      .collection("speed")
      .orderBy("id", "asc")
      .get()
      .then((snapshot) => {
        const speed_value = [];
        snapshot.forEach((doc) => {
          speed_value.push(doc.data());
        });
        setSpeedData(speed_value);
        setLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  lastItem = speedData[speedData.length - 1];
  if (lastItem !== undefined) {
    const obj = Object.entries(lastItem);
    obj.forEach(([key, value]) => {
      if (key === "speed") {
        lastSpeed = value;
      }
    });
  }

  // config speed guage
  const speedGuageConfigs = {
    type: "angulargauge",
    width: 500,
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Vehicle Speed In [KMPH]",
        lowerLimit: "0",
        upperLimit: "100",
        showValue: "1",
        numberSuffix: "%",
        theme: "fusion",
        showToolTip: "0",
      },
      colorRange: {
        color: [
          {
            minValue: "0",
            maxValue: "50",
            code: "#62B58F",
          },
          {
            minValue: "50",
            maxValue: "75",
            code: "#FFC533",
          },
          {
            minValue: "75",
            maxValue: "100",
            code: "#F2726F",
          },
        ],
      },
      dials: {
        dial: [
          {
            value: lastSpeed,
          },
        ],
      },
    },
  };

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
      <ReactFC {...speedGuageConfigs} />
      {loading ? (
        <BootstrapTable
          keyField="timestamp"
          data={speedData}
          columns={columns}
          pagination={paginationFactory()}
        />
      ) : (
        <ReactBootstrap.Spinner animation="border" />
      )}
    </div>
  );
}

export default SpeedLog;
