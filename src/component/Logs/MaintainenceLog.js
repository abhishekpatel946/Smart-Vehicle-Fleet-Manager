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
import "./MaintainanceLog.css";

function MaintainenceLog() {
  // define chart props
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

  const [loading, setLoading] = useState(false);
  const [maintainenceData, setMaintainenceData] = useState([]);

  let lastItem = [];
  let lastId = [];
  let lastMaintainance = [];
  let lastTimestamp = [];

  useEffect(() => {
    setTimeout(() => {
      db.collection("data")
        .doc("MP10ME7969")
        .collection("maintainance")
        .orderBy("id", "asc")
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
    }, 2000);
  }, []);

  // last record from data...
  Object.keys(maintainenceData).map((key) => {
    lastItem = maintainenceData[key];
    const obj = Object.entries(lastItem);
    obj.forEach(([key, value]) => {
      if (key === "id") {
        lastId.push(value);
      }
      if (key === "Amount") {
        lastMaintainance.push(value);
      }
      if (key === "timestamp") {
        lastTimestamp.push(value);
      }
    });
    return 0;
  });

  // config maintainence line with scrolling
  Charts(FusionCharts);
  const maintainenceSource = {
    chart: {
      caption: "Vehicle Maintainance Instaces",
      subcaption: "(As per recommended)",
      showvalues: "0",
      numvisibleplot: "12",
      plottooltext: "<b>$dataValue</b> Speed of Vehicle at $label",
      theme: "fusion",
    },
    categories: [
      {
        category: [
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
            value: lastMaintainance[lastMaintainance.length - 2],
          },
          {
            value: lastMaintainance[lastMaintainance.length - 1],
          },
        ],
      },
    ],
  };

  const columns = [
    {
      text: "COST",
      dataField: "Amount",
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

  // export to CSV
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
    <div className="maintainanceLog">
      <div className="maintainanceLog_chart">
        <ReactFusioncharts
          type="scrollline2d"
          width="30%"
          height="40%"
          dataFormat="JSON"
          dataSource={maintainenceSource}
        />
      </div>
      <div className="maintainanceLog_table">
        {loading ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={maintainenceData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="maintainanceLog_btn">
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

export default MaintainenceLog;
