import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: '#f0f0f0',
    text: '#141414',
}
export const darkTheme = {
    body: '#141414',
    text: '#f0f0f0',
}

export const GlobalStyles = createGlobalStyle`body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}`