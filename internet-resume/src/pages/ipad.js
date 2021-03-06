import React, { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import Window from "../components/window"
import styled from "styled-components"
import Draggable from "react-draggable"
import EyeVideo from "../assets/eye.gif"
import EyeVideo2 from "../assets/eye2.gif"
import EarVideo from "../assets/ear.gif"
import HandVideo from "../assets/hand.gif"
import LegVideo from "../assets/leg.gif"

export default function Home() {
  // 1194 x 760 for iPad Pro Safari
  const { height } = useWindowSize()
  const [isCloseHelpWindow, closeWindow] = useState(false)
  const [isClosePrivacyWindow, closePrivacyWindow] = useState(false)
  const [formPosX, changeFormPosX] = useState(Math.random() * 754)
  const [formPosY, changeFormPosY] = useState(Math.random() * 140)
  const [refreshPosX, changeRefreshPosX] = useState(Math.random() * 1034)
  const [refreshPosY, changeRefreshPosY] = useState(Math.random() * 560)
  const [helpPosX, changeHelpPosX] = useState(Math.random() * 834)
  const [helpPosY, changeHelpPosY] = useState(Math.random() * 283)
  const [privacyPosX, changePrivacyPosX] = useState(Math.random() * 834)
  const [privacyPosY, changePrivacyPosY] = useState(Math.random() * 283)
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
  const [otherPos2X, changeOtherPos2X] = useState(Math.random() * 954)
  const [otherPos2Y, changeOtherPos2Y] = useState(Math.random() * 520)
  const [wrapperHeight, changeHeight] = useState(850)

  useEffect(() => {
    changeFormPosX(Math.random() * 754)
    changeFormPosY(Math.random() * 140)
    changeRefreshPosX(Math.random() * 1034)
    changeRefreshPosY(Math.random() * 560)
    changeHelpPosX(Math.random() * 834)
    changeHelpPosY(Math.random() * 283)
    changePrivacyPosX(Math.random() * 834)
    changePrivacyPosY(Math.random() * 283)
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
    changeOtherPos2X(Math.random() * 954)
    changeOtherPos2Y(Math.random() * 520)

    changeHeight(height)
  }, [])
  return (
    <Layout overflow="hidden" maxWidth="1336px">
      <Wrapper height={wrapperHeight}>
        <Draggable handle="" cancel="">
          <Donut src="../donut.png" />
        </Draggable>
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
          isVideo={true}
          src={HandVideo}
        />
        <Window
          position={{ x: nosePosX, y: nosePosY }}
          width={283}
          height={400}
          zIndex={4}
          isVideo={true}
          src={EyeVideo2}
        />
        <Window
          position={{ x: mousePosX, y: mousePosY }}
          width={300}
          height={400}
          zIndex={3}
          isVideo={true}
          src={LegVideo}
        />
        <Window
          position={{ x: otherPosX, y: otherPosY }}
          width={464}
          height={138}
          zIndex={2}
          isVideo={true}
          src={EyeVideo}
        />
        <Window
          position={{ x: otherPos2X, y: otherPos2Y }}
          width={240}
          height={240}
          zIndex={2}
          isVideo={true}
          src={EarVideo}
        />
        <Window
          position={{ x: formPosX, y: formPosY }}
          width={440}
          height={620}
          openHelp={() => closeWindow(true)}
          openPrivacy={() => closePrivacyWindow(true)}
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
        {isClosePrivacyWindow ? (
          <Window
            position={{ x: privacyPosX, y: privacyPosY }}
            width={360}
            height={477}
            closePrivacy={() => closePrivacyWindow(false)}
            isPrivacy={true}
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
