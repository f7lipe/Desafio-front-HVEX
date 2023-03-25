import styled from "styled-components"

interface Props {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
    width?: string
    height?: string
}

const Group = styled.div`
    display: flex;
    width: ${(props: Props) => props.width || '100%'};
    height: ${(props: Props) => props.height || '100%'};
    align-items: ${(props: Props) => props.align || 'stretch'};
    justify-content: ${(props: Props) => props.justify || 'flex-start'};
`

export { Group }