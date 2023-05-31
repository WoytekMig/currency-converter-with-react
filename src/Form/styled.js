import styled from "styled-components";

export const Fieldset = styled.fieldset`
    max-width: 650px;
    margin: auto;
    padding-top: 15px;
    padding-bottom: 20px;
    opacity: 0.7;
    background-color: hsl(0, 0%, 100%);

    border-style: double;
    border-color: black;
    border-radius: 6px;
    border-width: 7px; 
`;
/* 
export const Border = styled.border`
    border-style: double;
    border-color: black;
    border-radius: 6px;
    border-width: 7px;
`; */

export const Legend = styled.legend`
    font-size: x-large;
    letter-spacing: 7px;
    text-transform: uppercase;
    background-color: hsl(0, 0%, 100%);

    border-style: double;
    border-color: black;
    border-radius: 6px;
    border-width: 7px; 
`;

export const Input = styled.input`
    margin: 10px 0 10px 10px;
    width: 150px;
`;

export const Button = styled.button`
    border-radius: 6px;
    width: 100%;
    max-width: 650px;
    background-color: hsl(0, 0%, 100%);
    opacity: 0.7;
    display: flex;
    justify-content: center;
    margin: 5px auto ;  

    &:hover {
    background-color: hsl(0, 3%, 19%);
    }

    &:active {
    background-color: hsl(48, 51%, 89%);
    }
`;