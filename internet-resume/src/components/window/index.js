import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Draggable, { DraggableCore } from "react-draggable"
import { useForm } from 'react-hook-form'
import axios from "axios";

const windowGap = 5
const Window = ({ position, width, height }) => {
  const [dragged, changeDragState] = useState(false)
  const [isSubmitted, updateSubmit] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      updateSubmit(false);
    }, 5000);
    return () => clearTimeout(timer);
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
                <Icon bg=""></Icon>
                <Icon bg=""></Icon>
                <Icon bg=""></Icon>
              </Icons>
            </StatusBar>
          </strong>
          <InsideWindow>
            {isSubmitted 
              ? <div>おわたよ</div> 
              :
                <>
                  <form onSubmit={handleSubmit(submit)}>
                    <label for="text">FacebookのID（ご自身のページのURLの末尾）</label>
                    <input id="text" type="text" name="ID" placeholder="shinnosuke.komiya" required ref={register()}/>
                    <button type="submit" name="button" value="送信"></button>
                  </form>
                  <iframe name="dummyIframe" style={{display: "none"}}></iframe>
                </>
            }
          </InsideWindow>
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
  border: solid 1px #666;
  box-sizing: border-box;
`

const InsideWindow = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 21px);
  background: #fff;
  border-left: solid 1px #666;
  border-right: solid 1px #666;
  border-bottom: solid 1px #666;
  box-sizing: border-box;
  margin: 0 1px 1px 1px;
`

const StatusBar = styled.div`
  width: 100%;
  height: 20px;
  background: #fff;
  border-bottom: solid 0.5px #666;
  box-sizing: border-box;
`

const Icons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`

const Icon = styled.div`
  background: #333;
  width: 15px;
  height: 15px;
  margin: 0 2px;
`

const BugWindow = styled.div`
  position: absolute;
  left: ${props => props.position.x}px;
  top: ${props => props.position.y}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border: solid 1px #666;
  box-sizing: border-box;
  z-index: ${props => props.zIndex};
  background: #fff;
`

export default Window
