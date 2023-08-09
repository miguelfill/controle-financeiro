import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 25%;
    box-shadow: 3px 3px 5px #5e5e5e;

    @media (max-width: 750px){
        width: 18%;

        p{
            font-size: 12px;
        }

        span{
            font-size: 20px;
        }

        svg{
            display: none;
        }
    }
`;

export const HeaderCard = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 10px;

    svg{
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    margin: .5em;
    font-size: 25px;
    font-weight: bold;
`;



