import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;   
    margin: 10px;
    width: 150px;
    height: 150px;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.tertiary};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 10px;

    img{
        object-fit: cover;
        width: 60px;
        height: 60px;
    }

    h3{
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
    }

    
    @media (min-width: 768px) {
        padding: 6px;
        margin: 10px;
        width: 240px;
        height: 240px;

        img{
            width: 100px;
            height: 100px;
        }

        h3{
            font-size: 24px;
        }
    }
`