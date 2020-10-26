import React, { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import Window from "../components/window"
import styled from "styled-components"

export default function Home() {
  const { height = 1194 } = useWindowSize()
  const [isCloseHelpWindow, closeWindow] = useState(false)
  const [formPosX, changeFormPosX] = useState(Math.random() * 650)
  const [formPosY, changeFormPosY] = useState(Math.random() * 210)
  const [refreshPosX, changeRefreshPosX] = useState(Math.random() * 1000)
  const [refreshPosY, changeRefreshPosY] = useState(Math.random() * 600)
  const [helpPosX, changeHelpPosX] = useState(Math.random() * 730)
  const [helpPosY, changeHelpPosY] = useState(Math.random() * 350)
  const [sunrisePosX, changeSunrisePosX] = useState(Math.random() * 720)
  const [sunrisePosY, changeSunrisePosY] = useState(Math.random() * 550)
  const [stringPosX, changeStringPosX] = useState(Math.random() * 900)
  const [stringPosY, changeStringPosY] = useState(Math.random() * 600)
  const [wrapperHeight, changeHeight] = useState(600);
  useEffect(() => {
    changeFormPosX(Math.random() * 1000)
    changeFormPosY(Math.random() * 600)
    changeRefreshPosX(Math.random() * 1000)
    changeRefreshPosY(Math.random() * 600)
    changeHelpPosX(Math.random() * 730)
    changeHelpPosY(Math.random() * 350)
    changeSunrisePosX(Math.random() * 720)
    changeSunrisePosY(Math.random() * 550)
    changeStringPosX(Math.random() * 900)
    changeStringPosY(Math.random() * 600)
    changeHeight(height);
  }, [])
  return (
    <Layout overflow="hidden" maxWidth="1336px">
      <Wrapper height={wrapperHeight}>
        <Donut src="../donut.png" />
        <Window
          position={{ x: stringPosX, y: stringPosY }}
          width={178}
          height={178}
          isStrings={true}
          zIndex={7}
        />
        <Window
          position={{ x: sunrisePosX, y: sunrisePosY }}
          width={360}
          height={222}
          isSunrise={true}
          zIndex={6}
        />
        <Window
          position={{ x: 200, y: 200 }}
          width={320}
          height={240}
          zIndex={5}
        />
        <Window
          position={{ x: 283, y: 400 }}
          width={283}
          height={400}
          zIndex={4}
        />
        <Window
          position={{ x: 300, y: 200 }}
          width={300}
          height={200}
          zIndex={3}
        />
        <Window
          position={{ x: 240, y: 240 }}
          width={240}
          height={240}
          zIndex={2}
        />
        <Window
          position={{ x: formPosX, y: formPosY }}
          width={440}
          height={620}
          openHelp={() => closeWindow(true)}
          handleClose={() => closeWindow(false)}
          isForm={true}
          zIndex={8}
        />
        <Window
          position={{ x: refreshPosX, y: refreshPosY }}
          width={160}
          height={200}
          isRefresh={true}
          zIndex={9}
        />
        {isCloseHelpWindow ? (
            <Window
              position={{ x: helpPosX, y: helpPosY }}
              width={360}
              height={477}
              handleClose={() => closeWindow(false)}
              isHelp={true}
              zIndex={100}
            />
        ) : null}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background-image: linear-gradient(transparent 98%, #fff 2%),
    linear-gradient(90deg, #e8e8e9 98%, #fff 2%);

  background-size: 80px 80px;
  background-repeat: repeat;
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
`

const Donut = styled.img`
  position: absolute;
  width: 40%;
  left: 20%;
`
