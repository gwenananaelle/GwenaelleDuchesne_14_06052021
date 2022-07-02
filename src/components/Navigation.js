import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: #fff;
    width: 50%;
    background-color: #6082b6;
    text-align: center;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    padding: 0.5rem;
  }
`
export default function Navigation() {
  return (
    <Nav>
      <Link to="/">Create Employees</Link>
      <Link to="EmployeeList">Current Employees</Link>
    </Nav>
  )
}
