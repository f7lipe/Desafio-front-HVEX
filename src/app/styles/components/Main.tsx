import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    background-color: ${props => props.theme.colors.terciary};
`