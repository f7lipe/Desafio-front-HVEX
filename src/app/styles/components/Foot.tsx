import styled from "styled-components"

const Foot = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    width: 100%;
    background-color: ${props => props.theme.colors.quaternary};
    color: white;
    position: relative;
    bottom: 0;
    @media (min-width: 768px) {
        padding: 40px;
    }
`

export { Foot }