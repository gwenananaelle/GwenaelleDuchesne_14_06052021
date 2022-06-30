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
import { Stack } from "@mui/material"

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

    setEmployee({
      [name]: value,
    })
  }
  function handleSubmit(event) {
    handleOpen()
    console.log(employee)
    event.preventDefault()
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={e => handleSubmit(e)}>
          <Stack spacing={2}>
            <label htmlFor="first-name">First Name</label>
            <Input
              type="text"
              id="first-name"
              name="firstName"
              onChange={e => handleInputChange(e)}
            />
            <label htmlFor="last-name">Last Name</label>
            <Input
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
              <Input
                id="street"
                type="text"
                name="street"
                onChange={e => handleInputChange(e)}
              />

              <label htmlFor="city">City</label>
              <Input
                id="city"
                type="text"
                name="city"
                onChange={e => handleInputChange(e)}
              />

              <label htmlFor="zip-code">Zip Code</label>
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
