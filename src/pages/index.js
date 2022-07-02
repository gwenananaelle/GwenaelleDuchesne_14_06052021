import React from "react"
import { Link } from "gatsby"
import CreateEmployeeForm from "../components/CreateEmployeeForm"
import store from "../app/store"
import { Provider } from "react-redux"

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <h1>HRnet</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="EmployeeList">Current Employees</Link>
            </li>
          </ul>
        </nav>
        <main>
          <CreateEmployeeForm />
        </main>
      </div>
    </Provider>
  )
}
