import styled from "styled-components";


export const StyledFeedbackOptions = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const StyledBTN = styled.button`
    background-color: transparent;
    padding: 12px 25px;
    border: 2px solid red;
    border-radius: 5px;
    font-weight: bold;
    transition-property: background-color, border;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: red;
        border: 2px solid black;
    }
`

export const StyledBtnItem = styled.li`
    

    :not(:last-child) {
        margin-right: 15px;
    }
`
