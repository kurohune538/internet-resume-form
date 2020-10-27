import React, { useState, useEffect } from "react"
import styled, { keyframes, css } from "styled-components"
import Draggable from "react-draggable"
import { useForm } from "react-hook-form"
import axios from "axios"

import HelpWindow from "./helpWindow"
import PrivacyWindow from "./privacyWindow";

const windowGap = 5
const refreshSec = 30000000
const windowDuration = 100
const Window = (props) => {
  const [dragged, changeDragState] = useState(false)
  const [isSubmitted, updateSubmit] = useState(false)
  const [win1, updateWin1] = useState(false)
  const [win2, updateWin2] = useState(false)
  const [win3, updateWin3] = useState(false)
  const [win4, updateWin4] = useState(false)
  const [win5, updateWin5] = useState(false)
  const [isRefreshPressed, refreshPressed] = useState(false);
  const [formDisabled, disableForm] = useState(true);
  const [nameValue, changeName] = useState("");
  const [enNameValue, changeEnName] = useState("");
  const [urlValue, changeUrl] = useState("");
  const [isChecked, checkToggle] = useState(false);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  })

  const pressQuestion = () => {
    props.openHelp();
    console.log("open help")
  }

  const handleClose = () => {
    props.handleClose();
    console.log("close")
  }
  const closePrivacy = () => {
    props.closePrivacy();
  }
  const openPrivacy = () => {
    props.openPrivacy();
  }
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = "/ipad"
      }, refreshSec)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  useEffect(() => {
    if(nameValue !== "" && enNameValue !== "" && urlValue !== "" && isChecked) {
      disableForm(false);
    } else {
      disableForm(true);
    }
  },[nameValue, enNameValue, urlValue, isChecked])

  const handleStart = () => {
    changeDragState(true)
    setTimeout(() => {
      if (win1) updateWin1(false)
      updateWin1(true)
      setTimeout(() => {
        if (win2) updateWin2(false)
        updateWin2(true)
        setTimeout(() => {
          if (win3) updateWin3(false)
          updateWin3(true)
          setTimeout(() => {
            if (win4) updateWin4(false)
            updateWin4(true)
            setTimeout(() => {
              if (win5) updateWin5(false)
              updateWin5(true)
            }, windowDuration)
          }, windowDuration)
        }, windowDuration)
      }, windowDuration)
    }, windowDuration)
  }
  const handleDrag = () => {
  }
  const handleStop = () => {
    setTimeout(() => {
      setTimeout(() => {
        if (!win5) updateWin5(true)
        updateWin5(false)
        setTimeout(() => {
          if (!win4) updateWin4(true)
          updateWin4(false)
          setTimeout(() => {
            if (!win3) updateWin3(true)
            updateWin3(false)
            setTimeout(() => {
              if (!win2) updateWin2(true)
              updateWin2(false)
              setTimeout(() => {
                if (!win1) updateWin1(true)
                updateWin1(false)
              }, windowDuration)
            }, windowDuration)
          }, windowDuration)
        }, windowDuration)
      }, windowDuration)
    }, windowDuration * 5)
  }

  const nameChanged = (e) => {
    changeName(e.target.value)
  }

  const enNameChanged = (e) => {
    changeEnName(e.target.value)
  }

  const urlChanged = (e) => {
    changeUrl(e.target.value)
  }

  const changeChecked = (e) => {
    checkToggle(!isChecked);
  }
  const submit = values => {
    const GOOGLE_ACTION =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6cO6ON06TOV5H11W5HHJI0-wrIhC0QiwpitjWnTAzo9iRbg/formResponse"
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append("entry.56730973", values.name)
    submitParams.append("entry.787505717", values.enName)
    submitParams.append("entry.624850384", values.url)

    // 実行
    axios
      .post(CORS_PROXY + GOOGLE_ACTION, submitParams)
      .then(() => {
        updateSubmit(true)
      })
      .catch(error => {
        console.log(error) // 失敗時
      })
  }
  return (
    <Draggable
      onStart={() => handleStart()}
      onDrag={() => handleDrag()}
      onStop={() => handleStop()}
      handle="strong, .handle"
      cancel=".help, .helpButton, .formItem"
    >
      <div>
        <StyledWindow
          position={props.position}
          width={props.width}
          height={props.height}
          zIndex={props.zIndex}
        >
            {props.isHelp || props.isPrivacy ? (
              <HelpStatusBar>
                <HelpCloseBtn
                  src="../helpClose.png"
                  onClick={props.isHelp ? () => handleClose() : () => closePrivacy()}
                  className="help"
                ></HelpCloseBtn>
                <strong>
                  <Bars>
                    <Bar></Bar>
                    <Bar></Bar>
                    <Bar></Bar>
                  </Bars>
                </strong>
              </HelpStatusBar>
            ) : (
              <strong>
              <StatusBar>
                <Icons>
                  <Icon bg=""></Icon>
                  <Icon bg=""></Icon>
                  <Icon bg=""></Icon>
                </Icons>
              </StatusBar>
              </strong>
            )}
          {props.isForm && (
            <InsideWindow isForm={props.isForm} className="handle">
              {isSubmitted ? (
                  <DoneFormWrapper>
                    <DoneForm>
                      <DoneTitle>送信完了✌</DoneTitle>
                      <NowSearchingWrapper>
                        <BoldText>NOW SEARCHING ... 🔍</BoldText>
                        <ProgressBar>
                          <ProgressContent isSubmitted={isSubmitted}></ProgressContent>
                        </ProgressBar>
                        <ContentsSentence>ただいま履歴書を作成中です。<br /> 他の作品の展示をまわりながら、 <br /><span>10~15分程お待ちください。</span></ContentsSentence>
                        <ContentsSentence>プリンターから履歴書が出力されたら、 <br />下の封筒に入れてお持ち帰りください。</ContentsSentence>
                      </NowSearchingWrapper>
                    </DoneForm>
                  </DoneFormWrapper>
              ) : (
                <>
                  <FbForm onSubmit={handleSubmit(submit)}>
                    <InputItem>
                      <LabelWrapper>
                        <Label htmlFor="text">フルネーム（漢字）</Label>
                      </LabelWrapper>
                      <FormInput
                        id="text"
                        type="text"
                        name="name"
                        placeholder="山田 太郎"
                        required
                        ref={register()}
                        onChange={e => nameChanged(e)}
                        className="formItem"
                      />
                    </InputItem>
                    <InputItem>
                      <LabelWrapper>
                        <Label htmlFor="text">フルネーム（ローマ字）</Label>
                      </LabelWrapper>
                      <FormInput
                        id="text"
                        type="text"
                        name="enName"
                        placeholder="Yamada Taro"
                        required
                        ref={register()}
                        onChange={e => enNameChanged(e)}
                        className="formItem"
                      />
                    </InputItem>
                    <InputItem>
                      <LabelWrapper>
                        <Label htmlFor="text">あなたのfacebookのURL</Label>
                        <QuestionButton
                          src="../question.png"
                          className="helpButton"
                          onClick={() => pressQuestion()}
                        ></QuestionButton>
                      </LabelWrapper>
                      <FormInput
                        id="text"
                        type="text"
                        name="url"
                        placeholder="shinnosuke.komiya"
                        required
                        ref={register()}
                        onChange={e => urlChanged(e)}
                        className="formItem"
                      />
                    </InputItem>
                    <PrivacyPolicy>
                      <input type="checkbox" onChange={e => changeChecked(e)} checked={isChecked} className="formItem"/><span onClick={() => openPrivacy()}>プライバシーポリシー</span>に同意
                    </PrivacyPolicy>
                    <SubmitButton type="submit" name="button" disabled={formDisabled} className="formItem">
                      送信
                    </SubmitButton>
                  </FbForm>
                  <iframe
                    name="dummyIframe"
                    style={{ display: "none" }}
                  ></iframe>
                </>
              )}
            </InsideWindow>
          )}
          {props.isPrivacy && 
            <InsideWindow className="handle">
              <PrivacyWindow className="formItem" />
            </InsideWindow>
          }
          {props.isHelp && (
            <InsideWindow className="handle">
              <HelpWindow className="formItem" />
            </InsideWindow>
          )}
          {props.isStrings && (
            <InsideWindowFixed className="handle">
              <Strings src="../strings.png" />
            </InsideWindowFixed>
          )}
          {props.isSunrise && (
            <InsideWindowFixed className="handle">
              <Sunrise src="../sunrise.png" />
            </InsideWindowFixed>
          )}
          {props.isRefresh && (
            <InsideWindowFixed className="handle">
              <RefreshBg>
                <RefreshBtn
                  onClick={() => {
                    refreshPressed(true)
                    window.location.href = "/ipad"
                  }}
                >
                  <Refresh src="../refresh.png" refresh={isRefreshPressed} />
                </RefreshBtn>
              </RefreshBg>
              <TryTap>👆TRY TAP👆</TryTap>
            </InsideWindowFixed>
          )}
        </StyledWindow>
        {dragged && (
          <>
            {win1 && (
              <BugWindow
                width={props.width}
                height={props.height}
                zIndex={-1}
                position={{
                  x: props.position.x + windowGap,
                  y: props.position.y + windowGap,
                }}
              />
            )}
            {win2 && (
              <BugWindow
                width={props.width}
                height={props.height}
                zIndex={-2}
                position={{
                  x: props.position.x + windowGap * 2,
                  y: props.position.y + windowGap * 2,
                }}
              />
            )}
            {win3 && (
              <BugWindow
                width={props.width}
                height={props.height}
                zIndex={-3}
                position={{
                  x: props.position.x + windowGap * 3,
                  y: props.position.y + windowGap * 3,
                }}
              />
            )}
            {win4 && (
              <BugWindow
                width={props.width}
                height={props.height}
                zIndex={-4}
                position={{
                  x: props.position.x + windowGap * 4,
                  y: props.position.y + windowGap * 4,
                }}
              />
            )}
            {win5 && (
              <BugWindow
                width={props.width}
                height={props.height}
                zIndex={-5}
                position={{
                  x: props.position.x + windowGap * 5,
                  y: props.position.y + windowGap * 5,
                }}
              />
            )}
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
  border: solid 2px #1c4c9e;
  box-sizing: border-box;
  z-index: ${props => props.zIndex};
`

const InsideWindow = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 32px);
  background: ${props => (props.isForm ? "" : "#fff")};
  background-image: ${props => (props.isForm ? 'url("../formBg.png")' : "")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-left: solid 2px #1c4c9e;
  border-right: solid 2px #1c4c9e;
  border-bottom: solid 2px #1c4c9e;
  box-sizing: border-box;
  margin: 0 8px 8px 8px;
  overflow: scroll;
`
const InsideWindowFixed = styled(InsideWindow)`
  overflow: hidden;
`

const StatusBar = styled.div`
  width: 100%;
  height: 24px;
  background: #fff;
  border-bottom: solid 2px #1c4c9e;
  box-sizing: border-box;
  display: flex;
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
  background: #1c4c9e;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 4px;
`

const HelpStatusBar = styled(StatusBar)`
  height: 32px;
  display: flex;
  width: 100%;
  strong {
    height: 100%;
    display: flex;
    width: 100%;
  }
`

const HelpCloseBtn = styled.img`
  height: 100%;
`

const Bars = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Bar = styled.div`
  background: #1c4c9e;
  height: 2px;
  width: 90%;
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
`

const BugWindow = styled.div`
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: solid 1px #1c4c9e;
  box-sizing: border-box;
  z-index: ${props => props.zIndex};
  background: #fff;
`

const FbForm = styled.form`
  display: flex;
  border: solid 2px #1c4c9e;
  border-radius: 14px;
  margin: 32px 20px;
  background: #fff;
  flex-direction: column;
  padding: 36px 16px;
`
const InputItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  color: #1c4c9e;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 8px;
`

const FormInput = styled.input`
  width: 100%;
  background: #f7f9fa;
  border: 2px solid #1c4c9e;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 1rem;
  color: #222;
  padding: 12px;
  &::placeholder {
    color: rgba(34, 34, 34, 0.24);
  }
`

const PrivacyPolicy = styled.p`
  color: #1c4c9e;
  margin: 8px 0 20px;
  text-align: left;
  font-size: 0.875rem;
  span {
    text-decoration: underline;
  }
  input {
    margin-right: 8px;
    border-radius: 2px;
  }
`


const SubmitButton = styled.button`
  opacity: ${props => props.disabled ? 0.5 : 1};
  background: linear-gradient(91.28deg, #396afc 3.47%, #2948ff 94.97%);
  border-radius: 12px;
  color: #fff;
  padding: 12px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  font-size: 1rem;
`

const QuestionButton = styled.img`
  width: 1rem;
  height: 1rem;
  margin-bottom: 8px;
  margin-left: 5px;
`

const Strings = styled.img`
  width: 100%;
  height: 100%;
`

const Sunrise = styled.img`
  margin: 15px;
  width: 313px;
`

const RefreshBg = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffea27;
  border-bottom: solid 2px #1c4c9e;
`

const RefreshBtn = styled.div`
  width: 84px;
  height: 84px;
  background: #f94a21;
  border: 2px solid #1c4c9e;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const styles = css`
  animation: ${spin} 2s linear infinite;
`

const Refresh = styled.img`
  width: 57px;
  ${props => (props.refresh ? styles : "")}
`

const TryTap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: bold;
  height: 42px;
  color: #1c4c9e;
`

const DoneFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const DoneForm = styled.div`
  display: flex;
  width: 90%;
  background: #fff;
  border: 2px solid #1C4C9E;
  box-sizing: border-box;
  border-radius: 14px;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const DoneTitle = styled.h1`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: center;
  width: 100%;
  color: #1C4C9E;
  margin-top: 48px;
`;

const NowSearchingWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: #1C4C9E;
  text-align: center;
  margin-bottom: 12px;
`;

const ProgressBar = styled.div`
  height: 32px;
  width: 224px;
  background: #F7F9FA;
  border: 2px solid #1C4C9E;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 30px;
  position: relative;
`;

const length = keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: 70%;
  }
`;

const lengthStyle = css`
  animation: ${length} 3s ease-out;
  animation-fill-mode: forwards;  
`

const ProgressContent = styled.div`
position: absolute;
left: -2px;
top: -2px;
width: 0;
background: #FFABD1;
border: 2px solid #1C4C9E;
box-sizing: content-box;
border-radius: 20px;
  height: 100%;
  ${lengthStyle}
`;


const ContentsSentence = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #1C4C9E;
  span {
    font-weight: bold;
  }
`;

export default Window
