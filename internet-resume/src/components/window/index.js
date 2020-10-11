import React from "react"
import styled from "styled-components"
import Draggable, { DraggableCore } from "react-draggable"

const Window = ({ position }) => {
  const handleStart = () => {
    console.log("handleStart")
  }
  const handleDrag = () => {
    console.log("handleDrag")
  }
  const handleStop = () => {
    console.log("handleStop")
  }
  return (
    <Draggable
      onStart={() => handleStart()}
      onDrag={() => handleDrag()}
      onStop={() => handleStop()}
      handle="strong"
    >
      <StyledWindow position={position}>
        <strong>
          <StatusBar>
            <Icons>
              <Icon bg=""></Icon>
              <Icon bg=""></Icon>
              <Icon bg=""></Icon>
            </Icons>
          </StatusBar>
        </strong>
        <InsideWindow>hoge</InsideWindow>
      </StyledWindow>
    </Draggable>
  )
}

const StyledWindow = styled.div`
  width: 300px;
  height: 250px;
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

export default Window
