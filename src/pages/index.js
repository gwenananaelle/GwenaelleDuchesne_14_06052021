import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
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
      <main>{/* <CreateEmployeeForm /> */}</main>
    </div>
  )
}
