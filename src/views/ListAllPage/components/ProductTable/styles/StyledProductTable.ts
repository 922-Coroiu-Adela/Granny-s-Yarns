import styled from "styled-components";

export const StyledProductTable = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #tableContent {
        background-color: #eba5c0;
        border: 5px solid #ed4b89;
        border-radius: 30px;
        text-align: center;
        padding: 20px;
    }

    button {
        margin-top: 20px;
        transition: 0.3s;
        padding: 10px 20px;
        font-size: 15px;
        background-color: #eba5c0;
        border-color: #ed4b89;
        border-radius: 10px;
    }

    button:hover {
        cursor: pointer;
        background-color: #ef89b0;
    }

`