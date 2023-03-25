import styled from "styled-components"

interface Props {
    color?: string
    backgroundColor?: string
    width?: string
    height?: string
    border?: string
    radius?: string
    margin?: string
    padding?: string
}

const Button = styled.button<Props>`
    color: ${props => props.color || "white"};
    background-color: ${props => props.backgroundColor || "transparent"};
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    border: ${props => props.border || "none"};
    border-radius: ${props => props.radius || "0"};
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};

    &:hover {
        cursor: pointer;
        background-color: ${(props: Props) => props.color || "transparent"};
        color: ${(props: Props) => props.backgroundColor || "white"};
    }
`

export { Button }