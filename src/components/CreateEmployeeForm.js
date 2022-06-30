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
import Button from "@mui/material/Button"

export default function CreateEmployeeForm() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
    department: "",
    state: "",
  })
  function handleInputChange(event) {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={e => handleInputChange(e)}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={e => handleInputChange(e)}
          />
          <DesktopDatePicker
            label="Date of Birth"
            inputFormat="YYYY-MM-DD"
            value={new Date("2014-08-18T21:11:54")}
            name="dateOfBirth"
            onChange={e => handleInputChange(e)}
            renderInput={params => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Start Date"
            inputFormat="YYYY-MM-DD"
            value={new Date("2014-08-18T21:11:54")}
            name="startDate"
            onChange={e => handleInputChange(e)}
            renderInput={params => <TextField {...params} />}
          />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              name="street"
              onChange={e => handleInputChange(e)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              onChange={e => handleInputChange(e)}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
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
          <Button onClick={handleOpen}>Save</Button>
          <MyModal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </form>
      </LocalizationProvider>
    </>
  )
}
