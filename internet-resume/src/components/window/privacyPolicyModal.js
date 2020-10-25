import React from "react";
import styled from "styled-components";

import 'rodal/lib/rodal.css';

const PrivacyPolicyModal = ({handleCloseModal}) => {
    return(
        <>
            <CloseButton src="./close.png" onClick={handleCloseModal}></CloseButton>
            <HelpWrapper>

            </HelpWrapper>
        </>
    )
}

const CloseButton = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    top: -40px;
    right: 0;
`;

const HelpWrapper = styled.div`
`;


export default PrivacyPolicyModal;