import styled from "styled-components"

export const StyledMainPage = styled.div`
    background-image: url("/1082532.jpg");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #addButton {
        margin-top: 20px;
        transition: 0.3s;
        padding: 10px 20px;
        font-size: 15px;
        background-color: #c8a47a;
        border-color: #8f6f3f;
        border-radius: 10px;
    }

    #addButton:hover {
        cursor: pointer;
        background-color: #7e6237;
    }

    #viewAllButton {
        margin-top: 20px;
        transition: 0.3s;
        padding: 10px 20px; 
        font-size: 15px;
        background-color: #c8a47a;
        border-color: #8f6f3f;
        border-radius: 10px;
    }

    #viewAllButton:hover {
        cursor: pointer;
        background-color: #7e6237;
    }

    #tableContainer {
        background-color: #b0abde;
        border: 5px solid #7293e0 ;
        border-radius: 30px; 
        padding: 55px;
        font-size: 20px;
    }

    #tableTitle {
        margin-top: 0px;
        text-align: center;
    }

`