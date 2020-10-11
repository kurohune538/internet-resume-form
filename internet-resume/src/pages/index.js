import React from "react"
import { useWindowSize } from "react-use"
import Window from "../components/window"

export default function Home() {
  const { width, height } = useWindowSize()
  return (
    <>
      <Window position={{ x: 100, y: 100 }} />
      <Window position={{ x: 200, y: 200 }} />
    </>
  )
}
