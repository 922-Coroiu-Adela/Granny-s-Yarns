import styled from "styled-components";

export const StyledProductTable = styled.table`
    text-align: center;
    border-spacing: 0;
    
    tbody > tr:hover {
        cursor: pointer;
        background-color: #7293e0;
        #deleteButton {
            display: block;
            width: 0;
        }
        #editButton {
            display: block;
            width: 0;
        }
    }

    #deleteButton {
        display: none
    }

    #editButton {
        display: none
    }

    #deleteButton:hover{
        color: red;
    }

    #editButton:hover{
        color: blue;
    }
    
`