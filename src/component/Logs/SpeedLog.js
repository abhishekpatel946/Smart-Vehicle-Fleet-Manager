import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function SpeedLog() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Timestamp",
        field: "timestamp",
        width: 50,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Timestamp",
        },
      },
      {
        label: "Speed",
        field: "speed",
        width: 40,
      },
    ],
    rows: [
      {
        timestamp: "Sat, 10 Oct 2020 18:30:00 GMT",
        speed: "0",
      },
      {
        timestamp: "Sat, 10 Oct 2020 18:32:00 GMT",
        speed: "5",
      },
      {
        timestamp: "Sat, 10 Oct 2020 18:34:00 GMT",
        speed: "10",
      },
      {
        timestamp: "Sat, 10 Oct 2020 18:36:00 GMT",
        speed: "15",
      },
      {
        timestamp: "Sat, 10 Oct 2020 18:38:00 GMT",
        speed: "20",
      },
    ],
  });

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      fullPagination
    />
  );
}
