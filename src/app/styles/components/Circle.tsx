import styled from "styled-components"

interface Props {
    backgroundColor?: string
    align?: string
    justify?: string
}

const Circle = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    align-self: ${props => props.align};
    justify-self: ${props => props.justify};

    img {
        width: 40px;
        height: 40px;
    }
`

export { Circle }