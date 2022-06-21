import React from "react"
import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import { departments } from "../data/departments"
import { states } from "../data/states"

export default function CreateEmployeeForm() {
  const stateOptions = states.map((state, index) => (
    <MenuItem key={index + state} value={state.abbreviation}>
      {state.name}
    </MenuItem>
  ))
  const departmentOptions = departments.map((department, index) => (
    <MenuItem key={index + department} value={department.name}>
      {department.name}
    </MenuItem>
  ))
  return (
    <>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <InputLabel id="select-label-state">State</InputLabel>
          <Select
            labelId="select-label-state"
            id="select-state"
            value={states[0].abbreviation}
            label="State"
            // onChange={handleChange}
          >
            {stateOptions}
          </Select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <InputLabel id="select-label-department">department</InputLabel>
        <Select
          labelId="select-label-department"
          id="select-department"
          value={departments[0].name}
          label="Department"
          // onChange={handleChange}
        >
          {departmentOptions}
        </Select>
      </form>
    </>
  )
}
