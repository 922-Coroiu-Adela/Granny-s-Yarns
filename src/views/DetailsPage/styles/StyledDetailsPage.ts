import styled from "styled-components";

export const StyledDetailsPage = styled.div`
    background-image: url("/yarnRainbow.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 20px;
    position: relative;

    #tableContent {
        background-color: #feedc3;
        border: 5px solid #ffe5a4;
        border-radius: 30px;
        text-align: center;
        padding: 20px;
    }

    #backButton {
        margin-top: 20px;
        transition: 0.3s;
        padding: 10px 20px;
        font-size: 15px;
        background-color: #dac99d;
        border-color: #caad65;
        border-radius: 10px;
    }

    #backButton:hover {
        cursor: pointer;
        background-color: #b3a152;
    }

    #catGif { 
        width: 250px;
        height: auto;
        position: absolute;
        left: 200px;
        top: 350px;
    }
`