import styled from "styled-components";

export const ContainerForm = styled.div`
    max-width: 1070px;
    margin: 20px auto;
    width: 95%;
    background-color: #ffffff;
    box-shadow: 3px 3px 5px #5e5e5e;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    margin-top: .5em;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #a1a1a1;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        margin-right: 5px;
        accent-color: #000000;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
    background-color: #001042;
`;



