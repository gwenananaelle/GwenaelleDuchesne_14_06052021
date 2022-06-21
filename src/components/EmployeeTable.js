import React from "react"
import MUIDataTable from "mui-datatables"

const columns = [
  "First Name",
  "Last Name",
  "Start Date",
  "Department",
  "Date Of Birth",
  "Street",
  "City",
  "State",
  "ZipCode",
]

const employees = [
  [
    "Fran",
    "Lebowitz",
    "01/01/1978",
    "Sales",
    "27/10/1950",
    "Cooper St",
    "Morristown",
    "New Jersey",
    "07960",
  ],
  [
    "Lee",
    "Harper",
    "01/01/1960",
    "Marketing",
    "28/04/1926",
    "Cooper St",
    "Monroeville",
    "Alabama",
    "36460",
  ],
]

const options = {
  search: "true",
  rowsPerPageOptions: [10, 25, 50, 100],
  print: false,
  download: false,
  viewColumns: false,
  filter: false,
}

export default function EmployeeTable() {
  return (
    <MUIDataTable
      title={"Current Employees"}
      data={employees}
      columns={columns}
      options={options}
    />
  )
}
