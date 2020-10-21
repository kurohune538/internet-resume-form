import React, {useState} from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import Window from "../components/window"

export default function Home() {
  const { width, height } = useWindowSize()
  const [isCloseHelpWindow, closeWindow] = useState(false);
  return (
    <Layout>
    {!isCloseHelpWindow &&
      <Window position={{ x: 100, y: 100 }} width={360} height={250} handleClose={() => closeWindow(true)} isForm={false} isHelp={true}/>}
      <Window position={{ x: 200, y: 200 }} width={300} height={250} isForm={true} />
    </Layout>
  )
}
