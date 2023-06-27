import styled from "styled-components";

export const Fieldset = styled.fieldset`
    max-width: 650px;
    margin: auto;
    padding: 25px;
    padding-bottom: 20px;
    opacity: 0.6;
    background-color: hsl(0, 0%, 100%);

    border-style: double;
    border-color: black;
    border-radius: 6px;
    border-width: 7px; 
`;

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
    margin: 10px 0 30px 10px;
    width: 150px;
`;

export const Button = styled(Fieldset)`           
    display: flex;
    justify-content: center; 
    border: none;
    margin-top: 10px;
    padding: 10px;
    font-size: x-large;
    
    &:hover {
    background-color: hsl(0, 3%, 19%);
    }

    &:active {
    background-color: hsl(48, 51%, 89%);
    }
`;

export const Loading = styled.p`
    font-size: large;
    color: grey;
`;

export const LoadingBar = styled.div`
    width: 100%;
    height: 20px;
    animation-name: loadingBar; 
    animation-duration: 2s;



    @keyframes loadingBar {
        from {
            width: 0%;
            background-color: black;
        }
        to {
            width: 100%;
            background-color: black;
        }
    }
`;

export const Failure = styled.p`
    font-size: x-large;
    color: red;
`;

export const Source = styled.span`
    display: block;
    font-size: small;
    text-align: right;
`;