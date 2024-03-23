import styled from "styled-components";

export const StyledEditPage = styled.div`
    background-image: url("/yarnsPhoto.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 20px;

    #tableContent {
        background-color: #f3f395;
        border: 5px solid #cfcf55;
        border-radius: 30px;
        text-align: center;
        padding: 20px;
    }

    button {
        margin-top: 20px;
        transition: 0.3s;
        padding: 10px 20px;
        font-size: 15px;
        background-color: #cfcf55;
        border-color: #bcbc37;
        border-radius: 10px;
    }

    button:hover {
        cursor: pointer;
        background-color: #9f9f2d;
    }
`