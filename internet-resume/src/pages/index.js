import React from "react"
import { useWindowSize } from "react-use"
import Window from "../components/window"

export default function Home() {
  const { width, height } = useWindowSize()
  return (
    <>
      <Window position={{ x: 100, y: 100 }} width={300} height={250} />
      <Window position={{ x: 200, y: 200 }} width={300} height={250} />
    </>
  )
}
