import React from "react"
import { Link } from "gatsby"

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
      <main></main>
    </div>
  )
}
