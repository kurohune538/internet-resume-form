import React, { useState, useEffect } from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import axios from "axios"
import Rodal from "rodal"
import Fade from "react-reveal/Fade"
import Jello from "react-reveal/Jello"

import FbModal from "../components/window/fbModal"
import PrivacyPolicyModal from "../components/window/privacyPolicyModal"

let windowHeight = 650

export default function Home() {
  const { width, height } = useWindowSize()
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  })
  const [visibleFbModal, updateFbModal] = useState(false)
  const [visiblePrivacyModal, updatePrivacyModal] = useState(false)
  if (height === "Infinity") height = 650

  useEffect(() => {
    windowHeight = height
  }, [])
  const handlePrivacy = () => {
    updatePrivacyModal(true)
  }

  const handleCloseFbModal = () => {
    updateFbModal(false)
  }

  const handleClosePrivacyPolicyModal = () => {
    updatePrivacyModal(false)
  }

  const submit = values => {
    const GOOGLE_ACTION =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScT19R9fiULc_rmPqY1U46sDfqM6HD-goHkAq235gs5H_YJDg/formResponse"
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append("entry.314335923", values.name)
    submitParams.append("entry.530463188", values.enName)
    submitParams.append("entry.41227066", values.email)
    submitParams.append("entry.2035937393", values.fb)

    // 実行
    axios
      .post(CORS_PROXY + GOOGLE_ACTION, submitParams)
      .then(() => {
        window.location.href = "/dmDone"
      })
      .catch(error => {
        console.log(error) // 失敗時
      })
  }
  return (
    <Layout overflow="scroll">
      <Wrapper>
        <Rodal
          visible={visibleFbModal}
          customStyles={{
            width: "90%",
            height: "80%",
            borderRadius: 0,
            border: "solid 2px #1C4C9E",
            padding: 0,
          }}
          showCloseButton={false}
        >
          <FbModal handleCloseModal={handleCloseFbModal} />
        </Rodal>
        <Rodal
          visible={visiblePrivacyModal}
          customStyles={{
            width: "90%",
            height: "80%",
            borderRadius: 0,
            border: "solid 2px #1C4C9E",
            padding: 0,
          }}
          showCloseButton={false}
        >
          <PrivacyPolicyModal
            handleCloseModal={handleClosePrivacyPolicyModal}
          />
        </Rodal>
        <Top height={windowHeight}>
          <Jello>
            <Title>
              INTERNET
              <br />
              RIREKISYO
            </Title>
          </Jello>
          <CursorIcon>&#x1f447;</CursorIcon>
        </Top>
        <Fade bottom distance="30px">
          <Para>
            ソーシャルディスタンスが推奨されていても、他者との関係性は続いていきます。私たちはインターネットやSNSを通して集めたピースをつなぎあわせ、直接会えない人の「その人らしさ」を推測しています。
          </Para>
        </Fade>
        <Fade bottom distance="30px">
          <Para>
            しかし、ネット上に存在する情報は必ずしも本人の意図通りと限らず、その推測が現実のあなたと乖離している場合もあります。私たちの考える距離の弱みとは、実態が見えなくなることで推測が先行してしまうこと。
          </Para>
        </Fade>
        {/* ここに画像 */}
        <Fade bottom distance="30px">
          <Para>
            この作品では、インターネット上の情報を頼りに私たちがあなたの履歴書を作ります。履歴書は第三者があなたを知り、推測するためのメディアです。通常、履歴書はパーソナルでクローズドな情報ですが、インターネット履歴書は公開されたパブリックな情報だけをつなぎ合わせています。
          </Para>
        </Fade>
        <Fade bottom distance="30px">
          <Para>
            何も見つからず真っ白な人もいれば、予想外の情報が載っているかもしれません。インターネットのあなたは、あなた自身とほとんど同じでしょうか？それとも全く違う別人でしょうか？
          </Para>
        </Fade>
        <FormWrapper>
          <Bubble src="./bubble.png"></Bubble>
          <Fade bottom distance="30px">
            <ParaWhite>
              履歴を作成するために必要なすべての項目を記入し、送信ボタンを押してください。数日以内に、ご入力していただいたメールアドレス宛にpdfで履歴書をお送りいたします。
            </ParaWhite>
          </Fade>
          <FormContents onSubmit={handleSubmit(submit)}>
            <Fade bottom distance="30px">
              <FormItem>
                <FormLabel>氏名（漢字）</FormLabel>
                <FormInput
                  placeholder="山田 太郎"
                  name="name"
                  ref={register()}
                  required
                ></FormInput>
              </FormItem>
            </Fade>
            <Fade bottom distance="30px">
              <FormItem>
                <FormLabel>NAME（ローマ字）</FormLabel>
                <FormInput
                  placeholder="Yamada Taro"
                  name="enName"
                  ref={register()}
                  required
                ></FormInput>
              </FormItem>
            </Fade>
            <Fade bottom distance="30px">
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormInput
                  placeholder="taro.yamada@gmail.com"
                  name="email"
                  ref={register()}
                  required
                ></FormInput>
              </FormItem>
            </Fade>
            <Fade bottom distance="30px">
              <FormItem>
                <LabelWrapper>
                  <FormLabel>あなたのFacebookのURL</FormLabel>
                  <QuestionButton
                    src="./question.png"
                    onClick={() => updateFbModal(true)}
                  ></QuestionButton>
                </LabelWrapper>
                <FormInput
                  placeholder="https://www.facebook.com/xxxxxx"
                  name="fb"
                  ref={register()}
                  required
                ></FormInput>
              </FormItem>
            </Fade>
            <Fade bottom distance="30px">
              <PrivacyPolicy>
                <span onClick={handlePrivacy}>プライバシーポリシー</span>
                はこちら
              </PrivacyPolicy>
            </Fade>
            <Fade bottom distance="30px">
              <SubmitButton type="submit">
                プライバシーポリシーに同意して送信
              </SubmitButton>
            </Fade>
          </FormContents>
        </FormWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: ${props => props.height}px;
  width: 100%;
`

const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 3.75rem;
  line-height: 3.375rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #1c4c9e;
`

const CursorIcon = styled.div`
  font-size: 4rem;
  line-height: 1.5rem;
`

const Para = styled.div`
  color: #1c4c9e;
  font-size: 0.875rem;
  line-height: 1.81;
  margin: 0 16px;
  font-weight: 400;
  margin-bottom: 48px;
`

const FormWrapper = styled.div`
  background: linear-gradient(135deg, #3c8ce7 0%, #00eaff 100%);
  padding: 80px 0 250px;
  position: relative;
  margin-top: 30px;
`

const ParaWhite = styled(Para)`
  color: #fff;
`

const FormContents = styled.form`
  width: 100%;
`

const Bubble = styled.img`
  position: absolute;
  right: 0;
  width: 40%;
  top: -80px;
`

const FormItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 20px;
`

const FormLabel = styled.p`
  color: #fff;
  font-size: 0.875rem;
  letter-spacing: 0.44px;
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
  color: #1c4c9e;
  padding: 12px;
  &::placeholder {
    color: rgba(34, 34, 34, 0.24);
  }
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`

const QuestionButton = styled.img`
  width: 1rem;
  height: 1rem;
  margin-bottom: 8px;
  margin-left: 5px;
`

const PrivacyPolicy = styled.p`
  color: #fff;
  text-align: center;
  span {
    text-decoration: underline;
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(91.28deg, #396afc 3.47%, #2948ff 94.97%);
  border-radius: 12px;
  color: #fff;
  padding: 12px;
  margin: 20px;
  text-align: center;
  font-weight: bold;
  width: calc(100% - 40px);
`
