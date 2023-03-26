'use client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles/global/GlobalStyle'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <body className={inter.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  )
}