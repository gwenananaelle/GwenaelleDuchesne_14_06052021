import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>the page you are looking for has been removed or relocated</p>
      <Link to="/">Go Back</Link>
    </div>
  )
}
