import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFusioncharts from "react-fusioncharts";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./OverSpeedLog.css";

function OverSpeedLog() {
  // define chart props
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

  const [overSpeedData, setOverSpeedData] = useState([]);
  const [loading, setLoading] = useState(false);

  var lastItem = [];
  var lastId = [];
  var lastOverSpeed = [];
  var lastTimestamp = [];

  useEffect(() => {
    db.collection("vehicle")
      .doc("overspeed_sensor")
      .collection("overspeed")
      .orderBy("id", "asc")
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

  // last record from data...
  Object.keys(overSpeedData).map((key) => {
    lastItem = overSpeedData[key];
    const obj = Object.entries(lastItem);
    obj.forEach(([key, value]) => {
      if (key === "id") {
        lastId.push(value);
      }
      if (key === "amount") {
        lastOverSpeed.push(value);
      }
      if (key === "timestamp") {
        lastTimestamp.push(value);
      }
    });
  });

  // config overspeed line with scrolling
  Charts(FusionCharts);
  const overspeedingSource = {
    chart: {
      caption: "Vehicle OverSpeeding Instaces",
      subcaption: "(As per recommended)",
      showvalues: "0",
      numvisibleplot: "10",
      plottooltext: "<b>$dataValue</b> Speed of Vehicle at $label",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: lastTimestamp[lastTimestamp.length - 3],
          },
          {
            label: lastTimestamp[lastTimestamp.length - 2],
          },
          {
            label: lastTimestamp[lastTimestamp.length - 1],
          },
        ],
      },
    ],
    dataset: [
      {
        data: [
          {
            value: lastOverSpeed[lastOverSpeed.length - 3],
          },
          {
            value: lastOverSpeed[lastOverSpeed.length - 2],
          },
          {
            value: lastOverSpeed[lastOverSpeed.length - 1],
          },
        ],
      },
    ],
  };

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

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const { SearchBar, ClearSearchButton } = Search;
  const MyExportCSV = (props) => {
    const handleClick = () => {
      props.onExport();
    };
    return (
      <div>
        <button className="btn btn-success" onClick={handleClick}>
          Export to CSV
        </button>
      </div>
    );
  };

  return (
    <div className="fuelRefillLog">
      <div className="fuelRefillLog_chart">
        <ReactFusioncharts
          type="scrollline2d"
          width="45%"
          height="35%"
          dataFormat="JSON"
          dataSource={overspeedingSource}
        />
      </div>
      <div className="fuelRefillLog_table">
        {loading ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={overSpeedData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="fuelRefillLog_btn">
                  <SearchBar {...props.searchProps} />
                  <ClearSearchButton {...props.searchProps} />
                  <MyExportCSV {...props.csvProps} />
                </div>
                <hr />
                <BootstrapTable
                  defaultSorted={defaultSorted}
                  pagination={paginationFactory()}
                  {...props.baseProps}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <ReactBootstrap.Spinner animation="border" />
        )}
      </div>
    </div>
  );
}

export default OverSpeedLog;