'use client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles/global/GlobalStyle'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}