import {
    createGlobalStyle
} from 'styled-components'
import BackgroundBlack from "../../../assets/background.jpg"
import BackgroundWhite from "../../../assets/background-white.jpg"

export const darkTheme = {
    body: '#f0f0f0',
    text: '#fff',
    hover: '#c9c9c9',
    navbarBackground: '#f3c901',
    navbarColor: '#551a91',
    backgroundImage: BackgroundBlack,
    headerTitle: '#f0f0f0',
    headerSubTitle: '#f3c901',
    shadow: "rgba(214, 228, 20, 0.1)",
}

export const lightTheme = {
    body: '#f0f0f0',
    text: '#141414',
    hover: '#c9c9c9',
    navbarBackground: '#f0f0f0',
    navbarColor: '#141414',
    backgroundImage: BackgroundWhite,
    headerTitle: '#141414',
    headerSubTitle: '#22093c',
    shadow: "rgba(0,0,0,0.1)",
}


export const GlobalStyles = createGlobalStyle `

body {
    background-image: url('${({ theme }) => theme.backgroundImage}');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

}
.content {
    display:flex;
    width:100vw;
    height: 100vh;
    flex-direction: row-reverse;
}
.buttonsColors {
    padding-left: 0.3em;
    position:fixed;
    right: 1vw;
    top: 1vh;
    display:flex;
    flex-direction: column;
}

.togglerTheme {
    padding: .5em;
    background:none;
    border:none;
    cursor: pointer;
    color: ${({ theme }) => theme.navbarColor};
}
.content-pages {
    display:flex;
    flex-direction: column;
    width: 70vw;
    height: 100%;
}
.content-navbar {
    display:flex;
    width: 30vw;
    height: 60%;
}
.navbar {
    width:50vw;
    background: ${({ theme }) => theme.navbarBackground};
    color: ${({ theme }) => theme.text};
    box-shadow: -2px 1px 3px ${({ theme }) => theme.shadow};
}

.navbar ul {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    list-style: none;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 2em 2em;
}

.navbar ul li {
    padding: 0 2px;
}

.navbar ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.navbarColor};
    text-transform: uppercase;
    font-family: 'Roboto Bold';
    font-size: 16px;
}
.navbar ul li button {
    border: none;
    background:none;
    color: ${({ theme }) => theme.navbarColor};
    text-transform: uppercase;
    font-family: 'Roboto Bold';
    font-size: 16px;
    cursor:pointer;
}

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.navbarBackground};
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: ${({ theme }) => theme.navbarColor};
    display: block;
    transition: 0.3s;
    text-transform: uppercase;
    font-family: 'Roboto Bold';
    font-size: 16px;
    cursor:pointer;
}
  
.sidebar a:hover {
    color:  ${({theme}) => theme.hover};
}

.toggled {
    width: 20vw;
}  

.sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    border:none;
    color:  ${({theme}) => theme.navbarColor};
    background:none;
    cursor:pointer;
}
  
.openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: ${({theme}) => theme.body};
    color: white;
    padding: 10px 15px;
    border: none;
}
  
.openbtn:hover {
    background-color: #444;
}
  
#main {
    transition: margin-left .5s;
    padding: 16px;
}

.home-page {
    display:flex;
    width:100%;
    height:100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto Italic";
    color: ${({theme}) => theme.navbarColor};
}

.home-page h1 {
    color: ${({theme}) => theme.headerTitle};
    font-family: 'Roboto Light';
    font-size: 2.6em;
}
.home-page h2 {
    color: ${({theme}) => theme.headerSubTitle};
    font-family: 'Roboto Light';
    font-size: 1.7em;
}

.footer {
    width: 100vw;
    height: 3vh;
    text-align: center;
    font-size: 8px;
    font-family: "Roboto Light";
    color: ${({theme}) => theme.text};
}

.footer a {
    text-decoration: none;
    color: ${({theme}) => theme.text};
}

@media screen and (max-height: 450px) {
    .sidebar {
        padding-top: 15px;
    }
    .sidebar a {
        font-size: 18px;
    }
}

`