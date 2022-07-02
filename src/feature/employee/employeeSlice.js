import { createSlice } from "@reduxjs/toolkit"

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    value: [
      {
        firstName: "Fran",
        lastName: "Lebowitz",
        startDate: "01/01/1978",
        department: "Sales",
        dateOfBirth: "27/10/1950",
        street: "Cooper St",
        city: "Morristown",
        state: "New Jersey",
        zipcode: "07960",
      },
      {
        firstName: "Lee",
        lastName: "Harper",
        startDate: "01/01/1960",
        department: "Marketing",
        dateOfBirth: "28/04/1926",
        street: "Cooper St",
        city: "Monroeville",
        state: "Alabama",
        zipcode: "36460",
      },
    ],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.value.push(action.payload)
    },
  },
})

export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
