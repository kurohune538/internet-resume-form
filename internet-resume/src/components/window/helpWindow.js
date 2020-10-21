import React from "react";
import styled from "styled-components";

const HelpWindow = () => {
    return(
        <InsideWindow>
        <Top>
            <Title>Facebook IDの確認方法</Title>
            <Button>Facebookアプリをご利用の方はこちら</Button>
            <Button>FacebookをWebでご利用の方はこちら</Button>
        </Top>
        </InsideWindow>
    )
}

const InsideWindow = styled.div`
    width: 100%;
    overflow: scroll;
    height: 100%;
    
`;

const Top = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Title = styled.div`
    width: 100%;
`;

const Button = styled.div`
    background: linear-gradient(91.28deg, #1C4C9E 10.3%, #406CDC 94.97%);
    border-radius: 12px;
    border: 1px solid #1C4C9E;
    box-sizing: border-box;
    height: 48px;
    width: 287px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
`;

export default HelpWindow;