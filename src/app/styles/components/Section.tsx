import styled from "styled-components"

interface Props{
    backgroundColor?: string;
    color?: string;
    margin?: string;
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
}

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${(props: Props) => props.align || 'flex-start'};
    justify-content: ${(props: Props) => props.justify || 'center'};
    padding: 10px 10px;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 10px 40px;
    }
`