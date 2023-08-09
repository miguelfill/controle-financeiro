import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
    border-left: 1px solid #c9c9c9;
    padding-left: .2em;
    padding-bottom: .5em;
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg{
        width: 18px;
        height: 18px;
    }
`;