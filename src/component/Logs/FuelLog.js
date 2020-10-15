import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function FuelLog() {
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
        label: "Fuel",
        field: "fuel",
        width: 40,
      },
    ],
    rows: [
      {
        timestamp: "Sat, 18 Oct 2020 10:00:00 GMT",
        fuel: "50",
      },
      {
        timestamp: "Sat, 18 Oct 2020 12:00:00 GMT",
        fuel: "45",
      },
      {
        timestamp: "Sat, 18 Oct 2020 14:00:00 GMT",
        fuel: "40",
      },
      {
        timestamp: "Sat, 18 Oct 2020 16:00:00 GMT",
        fuel: "35",
      },
      {
        timestamp: "Sat, 18 Oct 2020 18:00:00 GMT",
        fuel: "30",
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
