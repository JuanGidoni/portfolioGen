import {
    createGlobalStyle
} from 'styled-components'

export const lightTheme = {
    body: '#f0f0f0',
    text: '#141414',
    navbarBackground: '#141414',
    navbarColor: '#f0f0f0'
}

export const darkTheme = {
    body: '#141414',
    text: '#f0f0f0',
    navbarBackground: '#f0f0f0',
    navbarColor: '#141414'
}

export const GlobalStyles = createGlobalStyle `

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 95vh;
}

.navbar {
    background: ${({ theme }) => theme.navbarBackground};
    color: ${({ theme }) => theme.text};
}

.navbar ul {
    display: flex;
    width: 100%;
    height: 5vh;
    justify-content: center;
    align-items: center;
}

.navbar ul li {
    flex: 0 1 auto;
    padding: 0 2px;
}

.navbar ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.navbarColor};
    padding: 1em;
}

`