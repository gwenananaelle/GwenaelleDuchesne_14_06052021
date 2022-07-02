import React from "react"
import { Link } from "gatsby"
import EmployeeTable from "../components/EmployeeTable"
import store from "../app/store"
import { Provider } from "react-redux"

export default function EmployeeList() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <h1>HRnet</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Employees</Link>
            </li>
          </ul>
        </nav>
        <main>
          <EmployeeTable />
        </main>
      </div>
    </Provider>
  )
}
