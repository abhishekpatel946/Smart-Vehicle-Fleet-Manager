import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import * as ReactBootstrap from "react-bootstrap";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import "./SpeedLog.css";

function SpeedLog() {
  // define chart props
  ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

  // Resolves charts dependancy
  charts(FusionCharts);

  const [speedData, setSpeedData] = useState([]);
  const [loading, setLoading] = useState(false);

  var lastItem;
  var lastSpeed = 0;

  useEffect(() => {
    setTimeout(() => {
      db.collection("vehicle")
        .doc("speed_sensor")
        .collection("speed")
        .orderBy("id", "asc")
        .get()
        .then((snapshot) => {
          const speed_value = [];
          snapshot.forEach((doc) => {
            speed_value.push(doc.data());
            console.log(doc);
          });
          setSpeedData(speed_value);
          setLoading(true);
        })
        .catch((error) => console.log(error));
    }, 5000);
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

  lastItem = speedData[speedData.length - 1];
  if (lastItem !== undefined) {
    const obj = Object.entries(lastItem);
    obj.forEach(([key, value]) => {
      if (key === "speed") {
        lastSpeed = value;
      }
    });
  }

  // config widget
  const dataSource = {
    chart: {
      captionpadding: "0",
      origw: "320",
      origh: "300",
      gaugeouterradius: "115",
      gaugestartangle: "270",
      gaugeendangle: "-25",
      showvalue: "1",
      valuefontsize: "30",
      majortmnumber: "13",
      majortmthickness: "2",
      majortmheight: "13",
      minortmheight: "7",
      minortmthickness: "1",
      minortmnumber: "1",
      showgaugeborder: "0",
      theme: "fusion",
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "85",
          code: "#999999",
        },
        {
          minvalue: "85",
          maxvalue: "180",
          code: "#F6F6F6",
        },
      ],
    },
    dials: {
      dial: [
        {
          value: lastSpeed,
          bgcolor: "#F20F2F",
          basewidth: "8",
        },
      ],
    },
    annotations: {
      groups: [
        {
          items: [
            {
              type: "text",
              id: "text",
              text: "kmph",
              x: "$gaugeCenterX",
              y: "$gaugeCenterY + 40",
              fontsize: "20",
              color: "#555555",
            },
          ],
        },
      ],
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
    <div className="speedlog">
      <div className="speedlog_widget">
        <ReactFusioncharts
          type="angulargauge"
          width="50%"
          height="50%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
      <div className="speedlog_table">
        {loading ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={speedData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="speedlog_btn">
                  <SearchBar {...props.searchProps} />
                  <ClearSearchButton
                    className="btn btn-success"
                    {...props.searchProps}
                  />
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

export default SpeedLog;
