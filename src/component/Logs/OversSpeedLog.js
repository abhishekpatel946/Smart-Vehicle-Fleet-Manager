import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function Pagination() {
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
        label: "OverSpeed",
        field: "overspeed",
        width: 40,
      },
    ],
    rows: [
      {
        timestamp: "Sat, 1 Oct 2020 18:30:00 GMT",
        overspeed: "70",
      },
      {
        timestamp: "Sat, 10 Oct 2020 18:32:00 GMT",
        overspeed: "85",
      },
      {
        timestamp: "Sat, 15 Oct 2020 18:34:00 GMT",
        overspeed: "85",
      },
      {
        timestamp: "Sat, 16 Oct 2020 18:36:00 GMT",
        overspeed: "70",
      },
      {
        timestamp: "Sat, 20 Oct 2020 18:38:00 GMT",
        overspeed: "80",
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
