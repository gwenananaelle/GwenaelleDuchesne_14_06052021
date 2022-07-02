import { configureStore } from "@reduxjs/toolkit"
import employeeReducer from "../feature/employee/employeeSlice"

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
})
