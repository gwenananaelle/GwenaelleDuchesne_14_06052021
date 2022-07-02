import React from "react"
import MUIDataTable from "mui-datatables"
import { useSelector } from "react-redux"
import dayjs from "dayjs"

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

const options = {
  search: "true",
  rowsPerPageOptions: [10, 25, 50, 100],
  print: false,
  download: false,
  viewColumns: false,
  filter: false,
}

export default function EmployeeTable() {
  const employees = useSelector(state => state.employee.value)
  const employeeList = employees.map(employee => {
    const newEmployee = [
      employee.firstName,
      employee.lastName,
      dayjs(employee.startDate).format("DD/MM/YYYY"),
      employee.department,
      dayjs(employee.dateOfBirth).format("DD/MM/YYYY"),
      employee.street,
      employee.city,
      employee.state,
      employee.zipcode,
    ]
    return newEmployee
  })
  return (
    <MUIDataTable
      title={"Current Employees"}
      data={employeeList}
      columns={columns}
      options={options}
    />
  )
}
