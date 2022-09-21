import styled from "styled-components";
import { Row } from "../../styles/styles.styled";

// Estructure
export const ModalCnt = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top:2.5%;
    background-color: var(--color-modalBG);
    color: var(--color-modalText);
    box-shadow: 0px 0px 8px var(--card-shadow-opacity);
    border-radius: var(--modal-radius);
    padding: 1rem;
    gap: 1rem;    
    z-index: var(--index-modal);
    
    @media(min-width: 820px){
        width: 30rem;
    }
`;

export const ModalAskingCnt = styled(ModalCnt)`
    top: 60%;
    padding: 1.5rem 1rem 0 1rem;
    gap: 0.5rem;    
    @media(min-width: 820px){
        top: 2.5%;
        width: 30rem;
    }
`;

export const ModalAlertCnt = styled(ModalAskingCnt)`
    background-color: var(--color-alertBG);
    > p{
        color: var(--color-alertText);
    }
    > div > button{
        background-color: var(--color-button-alert);
        &:hover{
            background-color: var(--color-button-alert-hover);
        }
    }
`;

// Positioning
export const ButtonsControl = styled(Row)`
    justify-content: space-around;
    padding: 1rem 0 0.5rem 0;
`;