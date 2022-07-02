import React from "react"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import MyModal from "./MyModal"
import { departments } from "../data/departments"
import { states } from "../data/states"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import { HybridSelect } from "react-select-hybrid"
import { Input } from "@mui/material"
import { InputLabel } from "@mui/material"

import { Stack } from "@mui/material"

import { useDispatch } from "react-redux"
import { addEmployee } from "../feature/employee/employeeSlice"
import dayjs from "dayjs"

export default function CreateEmployeeForm() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    startDate: null,
    department: "",
    dateOfBirth: null,
    street: "",
    city: "",
    state: "",
    zipcode: "",
  })

  function handleInputChange(event) {
    console.log(event)
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    setEmployee({
      ...employee,
      [name]: value,
    })
  }
  function handleDateOfBirthChange(newValue) {
    const dateOfBirth = "dateOfBirth"
    const timestamp = dayjs(newValue).unix()
    setEmployee({
      ...employee,
      [dateOfBirth]: timestamp,
    })
  }
  function handleStartDateChange(newValue) {
    const startDate = "startDate"
    const timestamp = dayjs(newValue).unix()
    setEmployee({
      ...employee,
      [startDate]: timestamp,
    })
  }
  function handleSubmit(event) {
    handleOpen()
    console.log(employee)
    dispatch(addEmployee(employee))
    event.preventDefault()
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={e => handleSubmit(e)}>
          <Stack spacing={2}>
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input
              type="text"
              id="first-name"
              name="firstName"
              onChange={e => handleInputChange(e)}
            />
            <InputLabel htmlFor="last-name">Last Name</InputLabel>
            <Input
              type="text"
              id="last-name"
              name="lastName"
              onChange={e => handleInputChange(e)}
            />
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="YYYY-MM-DD"
              value={employee.dateOfBirth}
              name="dateOfBirth"
              onChange={handleDateOfBirthChange}
              renderInput={params => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Start Date"
              inputFormat="YYYY-MM-DD"
              value={new Date("2014-08-18T21:11:54")}
              name="startDate"
              onChange={handleStartDateChange}
              renderInput={params => <TextField {...params} />}
            />
            <fieldset className="address">
              <legend>Address</legend>

              <InputLabel htmlFor="street">Street</InputLabel>
              <Input
                id="street"
                type="text"
                name="street"
                onChange={e => handleInputChange(e)}
              />

              <InputLabel htmlFor="city">City</InputLabel>
              <Input
                id="city"
                type="text"
                name="city"
                onChange={e => handleInputChange(e)}
              />

              <InputLabel htmlFor="zip-code">Zip Code</InputLabel>
              <Input
                id="zip-code"
                type="number"
                name="zipCode"
                onChange={e => handleInputChange(e)}
              />
              <HybridSelect
                title="State"
                options={states}
                name="state"
                onChange={e => handleInputChange(e)}
              />
            </fieldset>
            <HybridSelect
              title="Department"
              options={departments}
              name="department"
              onChange={e => handleInputChange(e)}
            />
            <MyModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <Input type="submit" value="Save" />
          </Stack>
        </form>
      </LocalizationProvider>
    </>
  )
}
