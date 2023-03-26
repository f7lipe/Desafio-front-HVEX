import styled from "styled-components"

interface Props {
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
    width?: string
    height?: string
    margin?: string
    padding?: string
    titleColor?: string
    backgroundColor?: string
}

const Group = styled.div`
    display: flex;
    flex-direction: ${(props: Props) => props.direction || 'column'};
    width: ${(props: Props) => props.width || '100%'};
    height: ${(props: Props) => props.height || '100%'};
    margin: ${(props: Props) => props.margin || '0'};
    padding: ${(props: Props) => props.padding || '0'};
    align-items: ${(props: Props) => props.align || 'stretch'};
    justify-content: ${(props: Props) => props.justify || 'flex-start'};
    background-color: ${(props: Props) => props.backgroundColor || 'transparent'};

    @media (min-width: 768px) {
        flex-direction: ${(props: Props) => props.direction || 'row'};
    }
`

export { Group }