import styled from "styled-components";

export const StyledAddPage = styled.div`
    background-image: url("/yarnBears.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;

    #tableContent {
        background-color: #a8dfff;
        border: 5px solid #6abbea;
        border-radius: 30px;
        text-align: center;
        padding: 20px;
    }

    button {
        margin-top: 20px;
        transition: 0.3s;
        padding: 10px 20px;
        font-size: 15px;
        background-color: #ffba27;
        border-color: #f58e20;
        border-radius: 10px;
    }

    button:hover {
        cursor: pointer;
        background-color: #d69f27;
    }
`