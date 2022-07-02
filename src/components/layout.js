import styled from "@emotion/styled"
import React from "react"
import "./layout.css"
import Navigation from "../components/Navigation"

const Header = styled.header`
  text-align: center;
  color: #6082b6;
  border-bottom: 1px solid;
`
export default function Layout({ children }) {
  return (
    <div>
      <Header>
        <h1>HRnet</h1>
      </Header>
      <Navigation />
      {children}
    </div>
  )
}
