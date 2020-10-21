import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    font-size: 16px;
    font-family: 'Noto Sans JP', sans-serif;
  }
`
export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle theme="purple" />
      {children}
    </>
  )
}