import React, { useRef } from "react"
import styled from "styled-components"

const HelpWindow = ({ handleCloseModal }) => {
  const appRef = useRef(null)
  const webRef = useRef(null)

  const scroll = ref => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Wrapper>
      <HelpWrapper>
        <Top>
          <HelpDonut src="../helpDonut.png"></HelpDonut>
          <Title>facebookのURL確認方法</Title>
          <Buttons>
            <Button onClick={() => scroll(appRef)}>appの方はこちら 👀 </Button>
            <Button onClick={() => scroll(webRef)}>webの方はこちら 👀</Button>
          </Buttons>
          <Bubble src="../bubble.png"></Bubble>
        </Top>
        <Section ref={appRef}>
          <SectionTitle>appで確認する👀</SectionTitle>
          <SectionContent>
            <Para>
              下部のタブメニューから自分のプロフィールページを表示。[ … ]
              からプロフィール設定画面へ。
            </Para>
            <ExplainImg src="../fb1.png"></ExplainImg>
            <Para>
              facebook.com/以降の文字列(yamadataroの部分)をフォームに入力してください。
            </Para>
            <ExplainImg src="../fb2.png"></ExplainImg>
          </SectionContent>
        </Section>
        <Section ref={webRef}>
          <SectionTitle>webで確認する👀</SectionTitle>
          <SectionContent>
            <Para>
              下部のタブメニューから自分のプロフィールページを表示。[ … ]
              からプロフィール設定画面へ。
            </Para>
            <ExplainImg src="../fb3.png"></ExplainImg>
            <Para>
              開いたメニューの中からプロフィールへのリンクをコピーを選択
            </Para>
            <ExplainImg src="../fb4.png"></ExplainImg>
            <Para>
              facebook.com/以降の文字列(yamadataroの部分)をフォームに入力してください。
            </Para>
            <ExplainImg src="../fb5.png"></ExplainImg>
          </SectionContent>
        </Section>
      </HelpWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(transparent 95%, #f2f2f7 5%),
    linear-gradient(90deg, transparent 95%, #f2f2f7 5%);
  background-size: 20px 20px;
  background-repeat: repeat;
  overflow: scroll;
`

const HelpWrapper = styled.div`
  height: 100%;
`

const HelpDonut = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 40%;
  z-index: 1;
`

const Top = styled.div`
  background: #ffabd1;
  position: relative;
  min-height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 110px;
`

const Title = styled.div`
  border: solid 2px #1c4c9e;
  background: #fff;
  color: #1c4c9e;
  margin-top: 80px;
  padding: 18px 50px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5rem;
  position: relative;
  z-index: 2;
`

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Button = styled.div`
  background: linear-gradient(91.28deg, #396afc 3.47%, #2948ff 94.97%);
  border-radius: 12px;
  padding: 12px 70px;
  color: #fff;
  margin-bottom: 20px;
`

const Bubble = styled.img`
  position: absolute;
  right: 0;
  bottom: -100px;
  width: 60%;
`

const Section = styled.div`
  margin: 0 30px 44px;
`

const SectionTitle = styled.div`
  border-radius: 14px 14px 0 0;
  text-align: center;
  background: #ffea27;
  border: 2px solid #1c4c9e;
  box-sizing: border-box;
  padding: 20px;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #1c4c9e;
  font-weight: 500;
`

const SectionContent = styled.div`
  border-width: 0 2px 2px 2px;
  border-style: solid;
  border-color: #1c4c9e;
  box-sizing: border-box;
  border-radius: 0 0 14px 14px;
  padding: 16px;
  background: #fff;
`

const Para = styled.div`
  color: #222;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 16px;
  font-weight: 400;
`

const ExplainImg = styled.img`
  width: 100%;
  margin-bottom: 30px;
`

export default HelpWindow
