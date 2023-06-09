import styled from "styled-components"
import Link from "next/link"

interface Props {
    active?: string
}

export const NavLink = styled(Link)`
    margin: 20px 10px 0 0;
    font-size: 16px;
    background-color: ${props => props.theme.colors.quaternary};
    text-decoration: none;

    h5{
        color: ${(linkProps: Props) =>
        (props => linkProps.active ?
        props.theme.colors.primary : 'white')};
    }

    &:hover {
        h5{
            color: ${props => props.theme.colors.primary};
        }
    }

    @media screen and (min-width: 768px) {
        margin: 0;
    }
    `