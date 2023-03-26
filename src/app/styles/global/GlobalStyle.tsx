import { createGlobalStyle } from 'styled-components'

const theme = {
    colors: {
        primary: '#00B6DE',
        secondary: '#036FC0',
        tertiary: '#1C2C44',
        quaternary: '#1B2033',
    },
}

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: white;
        height: 100vh;
    }

    h1{
        font-size: 48px;
    }

    h2{
        font-size: 32px;
    }

    h3{
        font-size: 24px;
    }

    h4, text, li{
        font-size: 20px;
    }

    h5, p, address{
        font-size: 16px;
    }

    text {
        color: #373737;
    }

    address{
        font-style: normal;
    }

    h1, h2, h3, li {
        font-weight: 700;
    }

    h4, h5, text {
        font-weight: 400;
    }

    h1, h2, h3, h4, h5 {
        margin-bottom: 10px;
        color: ${theme.colors.primary};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`


export { GlobalStyle, theme }