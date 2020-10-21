import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Draggable from "react-draggable"
import { useForm } from 'react-hook-form'
import axios from "axios";

import HelpWindow from "./helpWindow";

const windowGap = 5
const refreshSec = 5000;
const Window = ({ position, width, height, handleClose, isForm, isHelp }) => {
  const [dragged, changeDragState] = useState(false)
  const [isSubmitted, updateSubmit] = useState(false);
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
  }
  const handleDrag = () => {
    console.log("handleDrag")
  }
  const handleStop = () => {
    console.log("handleStop")
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
        // window.location.href = '/' // 成功時
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
        <StyledWindow position={position} width={width} height={height}>
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
            <InsideWindow>
              {isSubmitted 
                ? <div>おわたよ</div> 
                :
                  <>
                    <form onSubmit={handleSubmit(submit)}>
                      <label htmlFor="text">FacebookのID（ご自身のページのURLの末尾）</label>
                      <input id="text" type="text" name="ID" placeholder="shinnosuke.komiya" required ref={register()}/>
                      <button type="submit" name="button" value="送信"></button>
                    </form>
                    <iframe name="dummyIframe" style={{display: "none"}}></iframe>
                  </>
              }
            </InsideWindow>
          }
          {isHelp &&
            <InsideWindow><HelpWindow /></InsideWindow>
          }
        </StyledWindow>
        {dragged && (
          <>
            <BugWindow
              width={width}
              height={height}
              zIndex={-1}
              position={{
                x: position.x + windowGap,
                y: position.y + windowGap,
              }}
            />
            <BugWindow
              width={width}
              height={height}
              zIndex={-2}
              position={{
                x: position.x + windowGap * 2,
                y: position.y + windowGap * 2,
              }}
            />
            <BugWindow
              width={width}
              height={height}
              zIndex={-3}
              position={{
                x: position.x + windowGap * 3,
                y: position.y + windowGap * 3,
              }}
            />

            <BugWindow
              width={width}
              height={height}
              zIndex={-4}
              position={{
                x: position.x + windowGap * 4,
                y: position.y + windowGap * 4,
              }}
            />
            <BugWindow
              width={width}
              height={height}
              zIndex={-5}
              position={{
                x: position.x + windowGap * 5,
                y: position.y + windowGap * 5,
              }}
            />
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
`

const InsideWindow = styled.div`
  width: calc(100% - 16px);
  height: calc(100% - 32px);
  background: #fff;
  border-left: solid 2px #1C4C9E;
  border-right: solid 2px #1C4C9E;
  border-bottom: solid 2px #1C4C9E;
  box-sizing: border-box;
  margin: 0 8px 8px 8px;
  overflow: scroll;
`

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

export default Window
