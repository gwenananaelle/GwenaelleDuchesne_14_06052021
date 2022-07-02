import React from "react"
import { Link } from "gatsby"
import CreateEmployeeForm from "../components/CreateEmployeeForm"
import store from "../app/store"
import { Provider } from "react-redux"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <main>
          <CreateEmployeeForm />
        </main>
      </Layout>
    </Provider>
  )
}
