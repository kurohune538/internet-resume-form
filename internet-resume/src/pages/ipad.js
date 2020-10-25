import React, {useState} from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import Window from "../components/window"
import styled from "styled-components"


export default function Home() {
  const { width, height = 1194 } = useWindowSize()
  const [isCloseHelpWindow, closeWindow] = useState(false);
  return (
    <Layout overflow="hidden" maxWidth="1336px">
      <Wrapper height={height}>
        <Donut src="donut.png" />
        {!isCloseHelpWindow &&
          <Window position={{ x: 100, y: 100 }} width={360} height={250} handleClose={() => closeWindow(true)} isForm={false} isHelp={true} zIndex={100}/>
        }
        <Window position={{ x: 200, y: 50 }} width={440} height={620} isForm={true} zIndex={8} />
        <Window position={{ x: 200, y: 200 }} width={178} height={178} isStrings={true} zIndex={7}/>
        <Window position={{ x: 200, y: 200 }} width={360} height={222} isSunrise={true} zIndex={6}/>
        <Window position={{ x: 200, y: 200 }} width={160} height={200} isRefresh={true} zIndex={9} />
        <Window position={{ x: 200, y: 200 }} width={300} height={250} zIndex={5}/>
        <Window position={{ x: 200, y: 200 }} width={300} height={250} zIndex={4}/>
        <Window position={{ x: 200, y: 200 }} width={300} height={250} zIndex={3}/>
        <Window position={{ x: 200, y: 200 }} width={300} height={250} zIndex={2}/>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background: #e8e8e9;
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
`;

const Donut = styled.img`
  position: absolute;
  width: 40%;
  left: 20%;
`;