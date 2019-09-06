import React from "react"

import GlobalStyle from "./styled/GlobalStyle"

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)

export default Layout
