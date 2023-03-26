import styled from "styled-components"

interface Props {
    color?: string
    width?: string
    thickness?: string
    margin?: string
}

const HorizontalLine = styled.hr<Props>`
    border: 0;
    border-top: ${props => props.thickness || "1px"} 
                solid 
                ${props => props.color || "#ccc"};
    width: ${props => props.width || "100%"};
    margin: ${props => props.margin || "0"};
`
export { HorizontalLine }