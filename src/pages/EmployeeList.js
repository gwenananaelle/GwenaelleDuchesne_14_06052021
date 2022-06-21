import React from "react"
import { Link } from "gatsby"
import EmployeeTable from "../components/EmployeeTable"

export default function EmployeeList() {
  return (
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
  )
}
