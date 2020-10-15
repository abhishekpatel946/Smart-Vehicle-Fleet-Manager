import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function FuelRefillLog() {
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
        label: "Refill",
        field: "refill",
        width: 40,
      },
    ],
    rows: [
      {
        timestamp: "Sat, 10 Oct 2020 18:30:00 GMT",
        refill: "50",
      },
      {
        timestamp: "Sat, 12 Oct 2020 18:32:00 GMT",
        refill: "50",
      },
      {
        timestamp: "Sat, 14 Oct 2020 18:34:00 GMT",
        refill: "50",
      },
      {
        timestamp: "Sat, 16 Oct 2020 18:36:00 GMT",
        refill: "50",
      },
      {
        timestamp: "Sat, 18 Oct 2020 18:38:00 GMT",
        refill: "50",
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
