import React from "react"
import { Link } from "gatsby"
import EmployeeTable from "../components/EmployeeTable"
import store from "../app/store"
import { Provider } from "react-redux"
import Layout from "../components/layout"

export default function EmployeeList() {
  return (
    <Provider store={store}>
      <Layout>
        <main>
          <EmployeeTable />
        </main>
      </Layout>
    </Provider>
  )
}
