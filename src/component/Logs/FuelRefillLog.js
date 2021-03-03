import React, { useEffect, useState } from "react";
import { db } from "../firebase/fireConfig";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootstrap from "react-bootstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./FuelRefillLog.css";

function FuelRefillLog() {
  // define chart props
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

  const [fuelRefillData, setFuelRefillData] = useState([]);
  const [loading, setLoading] = useState(false);

  var lastItem = [];
  var lastId = [];
  var lastFuelRefill = [];
  var lastTimestamp = [];

  useEffect(() => {
    setTimeout(() => {
      db.collection("vehicle")
        .doc("fuel_refill_sensor")
        .collection("fuel_refill")
        .orderBy("id", "asc")
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
    }, 5000);
  }, []);

  // last record from data...
  Object.keys(fuelRefillData).map((key) => {
    lastItem = fuelRefillData[key];
    const obj = Object.entries(lastItem);
    obj.forEach(([key, value]) => {
      if (key === "id") {
        lastId.push(value);
      }
      if (key === "amount") {
        lastFuelRefill.push(value);
      }
      if (key === "timestamp") {
        lastTimestamp.push(value);
      }
    });
    return 0;
  });

  // config fuel refill chart
  const fuelRefillChartConfigs = {
    type: "column2d",
    width: 500,
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Vehicle Fuel Refill In [litre]",
        subCaption: "In litres",
        xAxisName: "Timestamp",
        yAxisName: "Fuel (litre)",
        numberSuffix: "Lt.",
        theme: "fusion",
      },
      data: [
        // {
        //   label: lastTimestamp[lastTimestamp.length - 10],
        //   value: lastFuelRefill[lastFuelRefill.length - 10],
        // },
        // {
        //   label: lastTimestamp[lastTimestamp.length - 9],
        //   value: lastFuelRefill[lastFuelRefill.length - 9],
        // },
        // {
        //   label: lastTimestamp[lastTimestamp.length - 8],
        //   value: lastFuelRefill[lastFuelRefill.length - 8],
        // },
        {
          label: lastTimestamp[lastTimestamp.length - 7],
          value: lastFuelRefill[lastFuelRefill.length - 7],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 6],
          value: lastFuelRefill[lastFuelRefill.length - 6],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 5],
          value: lastFuelRefill[lastFuelRefill.length - 5],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 4],
          value: lastFuelRefill[lastFuelRefill.length - 4],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 3],
          value: lastFuelRefill[lastFuelRefill.length - 3],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 2],
          value: lastFuelRefill[lastFuelRefill.length - 2],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 1],
          value: lastFuelRefill[lastFuelRefill.length - 1],
        },
      ],
    },
  };

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
        <ReactFC {...fuelRefillChartConfigs} />
      </div>
      <div className="fuelRefillLog_table">
        {loading ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={fuelRefillData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="fuelRefillLog_btn">
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

export default FuelRefillLog;
