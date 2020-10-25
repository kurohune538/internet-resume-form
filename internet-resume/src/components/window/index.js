import React, { useState, useEffect } from "react"
import styled, { keyframes, css } from "styled-components"
import Draggable from "react-draggable"
import { useForm } from 'react-hook-form'
import axios from "axios";

import HelpWindow from "./helpWindow";

const windowGap = 5
const refreshSec = 5000;
const windowDuration = 100;
const Window = ({ position, width, height, handleClose, isForm, isHelp, isStrings, isSunrise, zIndex, isRefresh }) => {
  const [dragged, changeDragState] = useState(false)
  const [isSubmitted, updateSubmit] = useState(false);
  const [win1, updateWin1] = useState(false);
  const [win2, updateWin2] = useState(false);
  const [win3, updateWin3] = useState(false);
  const [win4, updateWin4] = useState(false);
  const [win5, updateWin5] = useState(false);
  const [isRefreshPressed, refreshPressed] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  })
  useEffect(() => {
    if(isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, refreshSec);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleStart = () => {
    console.log("handleStart")
    changeDragState(true)
    setTimeout(() => {
      if(win1) updateWin1(false);
      updateWin1(true);
      console.log("on win1");
      setTimeout(() => {
        if(win2) updateWin2(false);
        updateWin2(true);
        console.log("on win2");
        setTimeout(() => {
          if(win3) updateWin3(false);
          updateWin3(true);
          console.log("on win3");
          setTimeout(() => {
            if(win4) updateWin4(false);
            updateWin4(true);
            console.log("on win4");
            setTimeout(() => {
              if(win5) updateWin5(false);
              updateWin5(true);
              console.log("on win5");
            }, windowDuration);
          }, windowDuration);
        }, windowDuration);
      }, windowDuration);
    }, windowDuration);
    // return () => clearTimeout(timer1);
  }
  const handleDrag = () => {
    console.log("handleDrag")
  }
  const handleStop = () => {
    setTimeout(() => {
      console.log("wait");
      console.log("handleStop")
      setTimeout(() => {
        if(!win5) updateWin5(true);
        updateWin5(false);
        console.log("off win5");
        setTimeout(() => {
          if(!win4) updateWin4(true);
          updateWin4(false);
          console.log("off win4");
          setTimeout(() => {
            if(!win3) updateWin3(true);
            updateWin3(false);
            console.log("off win3");
            setTimeout(() => {
              if(!win2) updateWin2(true);
              updateWin2(false);
              console.log("off win2");
              setTimeout(() => {
                if(!win1) updateWin1(true);
                updateWin1(false);
                console.log("off win1");
              }, windowDuration);
            }, windowDuration);
          }, windowDuration);
        }, windowDuration);
      }, windowDuration);
    },windowDuration*5);

  }

  const submit = (values) => {
    console.log(values)
    const GOOGLE_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6cO6ON06TOV5H11W5HHJI0-wrIhC0QiwpitjWnTAzo9iRbg/formResponse";
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append("entry.624850384", values.ID)

    // 実行
    axios
      .post(CORS_PROXY + GOOGLE_ACTION, submitParams)
      .then(() => {
        console.log("success");
        updateSubmit(true);
      })
      .catch((error) => {
        console.log(error) // 失敗時
      })
  }
  return (
    <Draggable
      onStart={() => handleStart()}
      onDrag={() => handleDrag()}
      onStop={() => handleStop()}
      handle="strong"
    >
      <div>
        <StyledWindow position={position} width={width} height={height} zIndex={zIndex}>
          <strong>
            <StatusBar>
              <Icons>
                <Icon bg="" onClick={handleClose}></Icon>
                <Icon bg=""></Icon>
                <Icon bg=""></Icon>
              </Icons>
            </StatusBar>
          </strong>
          {isForm &&
            <InsideWindow isForm={isForm}>
              {isSubmitted 
                ? <div>おわたよ</div> 
                :
                  <>
                    <FbForm onSubmit={handleSubmit(submit)}>
                      <InputItem>
                        <LabelWrapper>
                          <Label htmlFor="text">あなたのfacebookのURL</Label><QuestionButton src="../question.png"></QuestionButton>
                        </LabelWrapper>
                        <FormInput id="text" type="text" name="ID" placeholder="shinnosuke.komiya" required ref={register()}/>
                      </InputItem>
                      <PrivacyPolicy><span>プライバシーポリシー</span>はこちら</PrivacyPolicy>
                      <SubmitButton type="submit" name="button">プライバシーポリシーに同意して送信</SubmitButton>
                    </FbForm>
                    <iframe name="dummyIframe" style={{display: "none"}}></iframe>
                  </>
              }
            </InsideWindow>
          }
          {isHelp &&
            <InsideWindow><HelpWindow /></InsideWindow>
          }
          {isStrings &&
            <InsideWindowFixed><Strings src="../strings.png" /></InsideWindowFixed>
          }
          {isSunrise &&
            <InsideWindowFixed><Sunrise src="../sunrise.png" /></InsideWindowFixed>
          }
          {isRefresh &&
            <InsideWindowFixed>
              <RefreshBg>
                <RefreshBtn onClick={() => {refreshPressed(true); window.location.href = "/ipad"}}>
                  <Refresh src="../refresh.png" refresh={isRefreshPressed}/>
                </RefreshBtn>
              </RefreshBg>
              <TryTap>👆TRY TAP👆</TryTap>
            </InsideWindowFixed>
          }
        </StyledWindow>
        {dragged && (
          <>
            {win1 &&
              <BugWindow
                width={width}
                height={height}
                zIndex={-1}
                position={{
                  x: position.x + windowGap,
                  y: position.y + windowGap,
                }}
              />
            }
            {win2 &&
              <BugWindow
                width={width}
                height={height}
                zIndex={-2}
                position={{
                  x: position.x + windowGap * 2,
                  y: position.y + windowGap * 2,
                }}
              />
            }
            {win3 &&
              <BugWindow
                width={width}
                height={height}
                zIndex={-3}
                position={{
                  x: position.x + windowGap * 3,
                  y: position.y + windowGap * 3,
                }}
              />
            }
            {win4 &&
              <BugWindow
                width={width}
                height={height}
                zIndex={-4}
                position={{
                  x: position.x + windowGap * 4,
                  y: position.y + windowGap * 4,
                }}
              />
            }
            {win5 &&
              <BugWindow
                width={width}
                height={height}
                zIndex={-5}
                position={{
                  x: position.x + windowGap * 5,
                  y: position.y + windowGap * 5,
                }}
              />
            }
          </>
        )}
      </div>
    </Draggable>
  )
}

const StyledWindow = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  background: #fff;
  border: solid 2px #1C4C9E;
  box-sizing: border-box;
  z-index: ${props => props.zIndex};

`

const InsideWindow = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 32px);
  background: ${props => props.isForm ? "" : "#fff"};
  background-image: ${props => props.isForm ? 'url("../formBg.png")' : ""};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-left: solid 2px #1C4C9E;
  border-right: solid 2px #1C4C9E;
  border-bottom: solid 2px #1C4C9E;
  box-sizing: border-box;
  margin: 0 8px 8px 8px;
  overflow: scroll;
`
const InsideWindowFixed = styled(InsideWindow)`
  overflow: hidden;
`;


const StatusBar = styled.div`
  width: 100%;
  height: 24px;
  background: #fff;
  border-bottom: solid 2px #1C4C9E;
  box-sizing: border-box;
`

const Icons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 12px;
  align-items: center;
  justify-content: flex-start;
`

const Icon = styled.div`
  background: #1C4C9E;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
`

const BugWindow = styled.div`
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: solid 1px #1C4C9E;
  box-sizing: border-box;
  z-index: ${props => props.zIndex};
  background: #fff;
`

const FbForm = styled.form`
  display: flex;
  border: solid 2px #1C4C9E;
  border-radius: 14px;
  margin: 32px 20px;
  background: #fff;
  flex-direction: column;
  padding: 36px 16px;
`;
const InputItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  color: #1C4C9E;
  font-size: 0.875rem;
  letter-spacing: 0.44px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  background: #F7F9FA;
  border: 2px solid #1C4C9E;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 1rem;
  color: #1C4C9E;
  padding: 12px;
  &::placeholder {
    color: rgba(34,34,34,0.24);
  }
`;

const PrivacyPolicy = styled.p`
  color: #1C4C9E;
  margin: 20px 0;
  text-align: center;
  span {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(91.28deg, #396AFC 3.47%, #2948FF 94.97%);
  border-radius: 12px;
  color: #fff;
  padding: 12px;
  text-align: center;
  font-weight: bold;
  width: 100%;
`;

const QuestionButton = styled.img`
  width: 1rem;
  height: 1rem;
  margin-bottom: 8px;
  margin-left: 5px;
`;

const Strings = styled.img`
  width: 100%;
  height: 100%;
`;

const Sunrise = styled.img`
  margin: 15px;
  width: 313px;
`;

const RefreshBg = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFEA27;
  border-bottom: solid 2px #1C4C9E;
`;

const RefreshBtn = styled.div`
  width: 84px;
  height: 84px;
  background: #F94A21;
  border: 2px solid #1C4C9E;
  box-sizing: border-box;
  border-radius: 12px;  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const styles = css`
  animation: ${spin} 2s linear infinite;
`;

const Refresh = styled.img`
  width: 57px;
  ${props => props.refresh ? styles : ""}
`;



const TryTap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.44;
  font-weight: bold;
  height: 42px;
  color: #1C4C9E;
`;
export default Window
