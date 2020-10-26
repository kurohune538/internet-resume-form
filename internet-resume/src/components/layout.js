import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    overflow: ${props => (props.overflow ? props.overflow : "")};
  }
  body {
    max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
    overflow: ${props => (props.overflow ? props.overflow : "hidden")};
    font-size: 16px;
    font-family: 'Noto Sans JP', sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    padding:0;
    background-image:
    linear-gradient(
      transparent 95%,
      #F2F2F7 5%
    ),
    linear-gradient(
      90deg,
      transparent 95%,
      #F2F2F7 5%
    );
  background-size: 20px 20px;
  background-repeat: repeat;
  }
  p {
    margin: 0;
    padding: 0;
  }
  button {
    display: inline-block;
    border: none;
    outline: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
}

`
export default function Layout({ children, overflow }) {
  return (
    <>
      <GlobalStyle theme="purple" overflow={overflow} />
      {children}
    </>
  )
}
