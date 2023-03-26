import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    z-index: 1;
    padding: 10px 10px;
    width: 100%;
    min-height: 70px;
    background-color: ${props => props.theme.colors.quaternary};

    @media screen and (min-width: 768px) {
        padding: 10px 40px;
    }
`