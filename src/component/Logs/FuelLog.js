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
import "./FuelLog.css";

function FuelLog() {
  // define chart props
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

  const [fuelData, setFuelData] = useState([]);
  const [loading, setLoading] = useState(false);

  var lastItem = [];
  var lastId = [];
  var lastFuel = [];
  var lastTimestamp = [];

  useEffect(() => {
    setTimeout(() => {
      db.collection("vehicle")
        .doc("fuel_sensor")
        .collection("fuel")
        .orderBy("id", "asc")
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
    }, 2000);
  }, []);

  // last record from data...
  Object.keys(fuelData).map((key) => {
    lastItem = fuelData[key];
    const obj = Object.entries(lastItem);
    obj.forEach(([key, value]) => {
      if (key === "id") {
        lastId.push(value);
      }
      if (key === "amount") {
        lastFuel.push(value);
      }
      if (key === "timestamp") {
        lastTimestamp.push(value);
      }
    });
    return 0;
  });

  // config fuel level chat
  const fuelLevelChartConfigs = {
    type: "column2d",
    width: 500,
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Vehicle Fuel level In [litre]",
        subCaption: "In litres",
        xAxisName: "Timestamp",
        yAxisName: "Fuel (litre)",
        numberSuffix: "Lt.",
        theme: "fusion",
      },
      data: [
        {
          label: lastTimestamp[lastTimestamp.length - 5],
          value: lastFuel[lastFuel.length - 5],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 4],
          value: lastFuel[lastFuel.length - 4],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 3],
          value: lastFuel[lastFuel.length - 3],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 2],
          value: lastFuel[lastFuel.length - 2],
        },
        {
          label: lastTimestamp[lastTimestamp.length - 1],
          value: lastFuel[lastFuel.length - 1],
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
    <div className="fuelLog">
      <div className="fuelLog_chart">
        <ReactFC {...fuelLevelChartConfigs} />
      </div>
      <div className="fuelLog_table">
        {loading ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={fuelData}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <div className="fuelLog_btn">
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

export default FuelLog;
