import React, { useState } from "react"
import Navbar from "../../components/navbar"
import "./layout.scss"
import GlobalContextProvider from "../../context/GlobalContextProvider"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalContextProvider>
        <div className="main">
          <Navbar />

          {children}

        </div>
      </GlobalContextProvider>
    </>
  )
}



export default Layout
