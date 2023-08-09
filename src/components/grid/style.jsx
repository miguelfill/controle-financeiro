import styled from "styled-components"

export const Table = styled.table`
    width: 98%;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 3px 3px 5px #5e5e5e;
    border-radius: 5px;
    max-width: 1075px;
    margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    border-bottom: inset;
    padding-left: .2em;
    padding-bottom: 5px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")}
`;