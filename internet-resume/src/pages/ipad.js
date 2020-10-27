import React, { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import Window from "../components/window"
import styled from "styled-components"

export default function Home() {
  // 1194 x 760 for iPad Pro Safari
  const { width, height } = useWindowSize()
  const [isCloseHelpWindow, closeWindow] = useState(false)
  const [formPosX, changeFormPosX] = useState(Math.random() * 754)
  const [formPosY, changeFormPosY] = useState(Math.random() * 140)
  const [refreshPosX, changeRefreshPosX] = useState(Math.random() * 1034)
  const [refreshPosY, changeRefreshPosY] = useState(Math.random() * 560)
  const [helpPosX, changeHelpPosX] = useState(Math.random() * 834)
  const [helpPosY, changeHelpPosY] = useState(Math.random() * 283)
  const [sunrisePosX, changeSunrisePosX] = useState(Math.random() * 834)
  const [sunrisePosY, changeSunrisePosY] = useState(Math.random() * 538)
  const [stringPosX, changeStringPosX] = useState(Math.random() * 1016)
  const [stringPosY, changeStringPosY] = useState(Math.random() * 582)
  const [eyePosX, changeEyePosX] = useState(Math.random() * 874)
  const [eyePosY, changeEyePosY] = useState(Math.random() * 520)
  const [nosePosX, changeNosePosX] = useState(Math.random() * 911)
  const [nosePosY, changeNosePosY] = useState(Math.random() * 360)
  const [mousePosX, changeMousePosX] = useState(Math.random() * 894)
  const [mousePosY, changeMousePosY] = useState(Math.random() * 994)
  const [otherPosX, changeOtherPosX] = useState(Math.random() * 954)
  const [otherPosY, changeOtherPosY] = useState(Math.random() * 520)
  const [wrapperHeight, changeHeight] = useState(760);

  useEffect(() => {
    changeFormPosX(Math.random() * 754)
    changeFormPosY(Math.random() * 140)
    changeRefreshPosX(Math.random() * 1034)
    changeRefreshPosY(Math.random() * 560)
    changeHelpPosX(Math.random() * 834)
    changeHelpPosY(Math.random() * 283)
    changeSunrisePosX(Math.random() * 834)
    changeSunrisePosY(Math.random() * 538)
    changeStringPosX(Math.random() * 1016)
    changeStringPosY(Math.random() * 582)
    changeEyePosX(Math.random() * 874)
    changeEyePosY(Math.random() * 520)
    changeNosePosX(Math.random() * 911)
    changeNosePosY(Math.random() * 360)
    changeMousePosX(Math.random() * 894)
    changeMousePosY(Math.random() * 994)
    changeOtherPosX(Math.random() * 954)
    changeOtherPosY(Math.random() * 520)

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
          position={{ x: eyePosX, y: eyePosY }}
          width={320}
          height={240}
          zIndex={5}
        />
        <Window
          position={{ x: nosePosX, y: nosePosY }}
          width={283}
          height={400}
          zIndex={4}
        />
        <Window
          position={{ x: mousePosX, y: mousePosY }}
          width={300}
          height={200}
          zIndex={3}
        />
        <Window
          position={{ x: otherPosX, y: otherPosY }}
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
