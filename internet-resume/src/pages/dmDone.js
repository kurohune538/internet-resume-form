import React, { useState } from "react"
import { useWindowSize } from "react-use"
import Layout from "../components/layout"
import styled from "styled-components"

export default function Home() {
  const { width, height } = useWindowSize()
  return (
    <Layout overflow="hidden">
      <Wrapper>
        <TopImg src="./done.png"></TopImg>
        <Title>送信完了しました📩</Title>
        <Para>
          ご入力いただいたメールアドレス宛にxxxx@gmail.comから受付確認メールをお送りしましたのでご確認ください。数日以内に、メールアドレス宛に履歴書のデータをお送りいたします。尚、確認メールが届かない場合、場合にはご入力時のメールアドレスをご確認ください。
        </Para>
        <Para>
          また、ご利用環境、また迷惑メール対策等の設定により、返信が届かない場合があります。「@ml.kumanichi.com」「@kumanichi.co.jp」からのメール受信が可能な設定にしていただき、迷惑メール対策等の設定をご確認いただきますようお願いいたします
        </Para>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div``

const TopImg = styled.img`
  width: calc(100% - 20px);
  margin: 30px 0;
`

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.875rem;
  text-align: center;
  color: #1c4c9e;
`

const Para = styled.div`
  color: #1c4c9e;
  font-size: 0.875rem;
  line-height: 1.81;
  margin: 0 16px;
  font-weight: 400;
  margin-bottom: 36px;
`
