import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    }
`
const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export { GlobalStyle, theme }