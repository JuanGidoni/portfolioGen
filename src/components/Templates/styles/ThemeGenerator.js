import {
    createGlobalStyle
} from 'styled-components'
import BackgroundBlack from "../../../assets/background.jpg"
import BackgroundWhite from "../../../assets/background-white.jpg"

import {
    themeConfig
} from "../../Configuration/config.js"

export const darkTheme = {
    body: themeConfig.colors.dark.body,
    text: themeConfig.colors.dark.text,
    hover: themeConfig.colors.dark.navbarHover,
    navbarBackground: themeConfig.colors.dark.navbarBackground,
    navbarColor: themeConfig.colors.dark.navbarText,
    backgroundImage: BackgroundBlack,
    headerTitle: themeConfig.colors.dark.heading,
    headerSubTitle: themeConfig.colors.dark.subHeading,
    shadow: "rgba(214, 228, 20, 0.1)",
}

export const lightTheme = {
    body: themeConfig.colors.light.body,
    text: themeConfig.colors.light.text,
    hover: themeConfig.colors.dark.navbarHover,
    navbarBackground: themeConfig.colors.light.navbarBackground,
    navbarColor: themeConfig.colors.light.navbarText,
    backgroundImage: BackgroundWhite,
    headerTitle: themeConfig.colors.light.heading,
    headerSubTitle: themeConfig.colors.light.heading2,
    shadow: "rgba(0,0,0,0.1)",
}


export const GlobalStyles = createGlobalStyle `

body {
    background-image: url('${({ theme }) => theme.backgroundImage}');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    scroll-behavior: smooth;
    overflow:hidden;
}

.loader-content {
  background: ${({ theme }) => theme.body};
}

.useravatar {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:start;
    border-right: 1px solid ${({ theme }) => theme.headerTitle};
}

.avatar {
    padding: 16px 8px 8px 32px;
}

.name {
    padding: 8px 8px 8px 32px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background: ${({ theme }) => theme.body};
}
 
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
 
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.headerSubTitle};
}

.content-resume {
    min-height: 100%;
    width:100%;
    overflow: auto;
    height: 100vh;
}

.resume {
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
.resume .author-name {
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    height: 100%;
}
.author-name h2 {
    margin: 0;
    padding: 0;
}
.form input::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}

h1::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}

h2::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}

p::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}

a::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}
div::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}
footer::selection{
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
}

.form {
    display:flex;
    flex-direction: column;
}

.form input {
    font-size: 12px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
    padding: 10px 15px;
    border: none;
    text-align: center;
    text-transform: uppercase;
    font-family: "Roboto Bold";
}

.form input:focus {
    background-color: ${({ theme }) => theme.body};
    color:  ${({ theme }) => theme.navbarColor};
    border: none;
    box-shadow: none;
    outline: none;
}

.form input:focus::placeholder {
    color:  ${({ theme }) => theme.navbarColor};
}

.content {
    display:flex;
    width:100vw;
    height: 100vh;
    min-height: 100%;
    flex-direction: column;
}


.cards_item {
    width: 100%;
  }

.btn {
    font-size: 20px;
    cursor: pointer;
    background-color: none;
    color:  ${({ theme }) => theme.navbarColor};
    padding: 10px 15px;
    border: none;
}


.content-pages {
    display:flex;
    flex-direction: column;
    width: 70vw;
    height: 100%;
}

.content-navbar {
    display:flex;
    width: 100vw;
    height: 10vh;
}

.navbar {
    width:100vw;
    height: auto;
    background: ${({ theme }) => theme.navbarBackground};
    color: ${({ theme }) => theme.text};
    box-shadow: -2px 1px 3px ${({ theme }) => theme.shadow};
    display:none;
    list-style:none;
}

.navbar ul li a {
    font-size: 1em;
}
.sidebar {
    height: 100vh;
    min-height: 100%;
    width: 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.navbarBackground};
    overflow-x: hidden;
    transition: 0.5s;
    padding:0;
    margin:0;
    list-style: none;
}

.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 35px;
    color: ${({ theme }) => theme.navbarColor};
    display: block;
    transition: 0.3s;
    text-transform: uppercase;
    font-family: 'Roboto Bold';
    cursor:pointer;
}
  
.sidebar a:hover {
    color:  ${({theme}) => theme.hover};
}

.toggled {
    width: 50vw;
}  

.sidebar li button {
    padding: 8px 8px 8px 32px;
    border: none;
    background:none;
    color: ${({ theme }) => theme.navbarColor};
    text-transform: uppercase;
    font-family: 'Roboto Bold';
    font-size: 35px;
    cursor:pointer;
}

.sidebar li button:hover {
    color: ${({ theme }) => theme.hover};
}

.sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 36px;
    margin-left: 50px;
    border:none;
    color:  ${({theme}) => theme.navbarColor};
    background:none;
    cursor:pointer;
}

.sidebar .closebtn:hover {
    color: ${({ theme }) => theme.hover};
}
  
#main {
    transition: margin-left .5s;
    padding: 16px;
}

.home-page {
    display:flex;
    width:100vw;
    height:100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto Italic";
    color: ${({theme}) => theme.navbarColor};
}

.posts-page {
    display:flex;
    width:100%;
    height:auto;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto Italic";
    color: ${({theme}) => theme.navbarColor};
}
.posts-grid {
    margin: 1.5em 0;
    padding: 1.5em;
    background:#353535;
}
h1 {
    color: ${({theme}) => theme.headerTitle};
    font-family: 'Roboto Light';
    font-size: 2.5em;
}
h2 {
    color: ${({theme}) => theme.headerSubTitle};
    font-family: 'Roboto Light';
    font-size: 1.5em;
}
h3 {
    color: ${({theme}) => theme.headerSubTitle};
    font-family: 'Roboto Light';
}
h4 {
    color: ${({theme}) => theme.headerSubTitle};
    font-family: 'Roboto Light';
}
h5 {
    color: ${({theme}) => theme.headerSubTitle};
    font-family: 'Roboto Light';
}

.footer {
    text-align: center;
    font-family: "Roboto Light";
    font-size: 1em;
    color: ${({theme}) => theme.navbarColor};
}

.footer button:hover {
    color: ${({ theme }) => theme.headerTitle};
}
.footer a {
    text-decoration: none;
    color: ${({ theme }) => theme.headerTitle};
}

.footer a:hover {
    color: ${({ theme }) => theme.text};
}

.dashboard-index {
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
}

.dashboard-index a {
    text-decoration: none;
    color:  ${({ theme }) => theme.navbarColor};
}

.dashboard-buttons {
    display:flex;
    width: 33.33vw;
    height: 100%;
}

.dashboard-buttons > div {
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
}
.dashboard-buttons > div > a {
    color:  ${({ theme }) => theme.navbarColor};
    font-size:1em;
}

.dashboard-buttons > div > a:hover {
    color:  ${({ theme }) => theme.headerSubTitle};
}


.mb-1 {
    margin-bottom: 10px;
}


.btn-admin {
    font-size: 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.navbarBackground};
    color:  ${({ theme }) => theme.navbarColor};
    padding: 10px 15px;
    border: none;
    text-align: center;
    text-transform: uppercase;
    font-family: "Roboto Light";
}

.btn-upload {
    font-size: 12px;
    cursor: pointer;
    background: none;
    color:  ${({ theme }) => theme.text};
    padding: 5px 15px;
    margin-left: 2px;
    border: none;
    text-align: center;
    text-transform: uppercase;
    font-family: "Roboto Bold";
}

.togglerTheme {
    position:fixed;
    top:0;
    right:0;
    padding: .5em .5em;
    background:none;
    font-size: 36px;
    display:block;
    border:none;
    cursor:pointer;
    color: ${({ theme }) => theme.navbarColor};
}

.togglerTheme:hover {
    color: ${({ theme }) => theme.navbarBackground};
}

.togglerLang {
    position:fixed;
    bottom:0;
    left:0;
    padding: .5em;
    background:none;
    width: 36px;
    display:block;
    border:none;
    cursor:pointer;
    filter: grayscale(0.55);
    transition: 0.5s all ease-in-out;
}

.togglerLang:hover {
    filter: grayscale(0);
    transition: 0.5s all ease-in-out;
}

.open-menu {
    position:fixed;
    top:0;
    left:0;
    padding: .5em .5em;
    background:none;
    color: ${({ theme }) => theme.navbarColor};
    font-size: 36px;
    display:block;
}

.open-menu:hover {
    color: ${({ theme }) => theme.navbarBackground};
}


@media screen and (max-height: 560px) {
    .sidebar {
        padding-top: 15px;
    }
    .sidebar a {
        font-size: 18px;
    }
}

@media screen and (min-width: 560px) {

    .content {
        flex-direction: column;
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
        width: 100vw;
        height: 100%;
    }

    .content-navbar {
        display:flex;
        width: 100vw;
        height: auto;
    }

    .navbar {
        display:none;
    }

    .open-menu {
        display:block;
    }

    .sidebar {
        display:block;
    }
      
    #main {
        transition: margin-left .5s;
        padding: 16px;
    }
    
    .home-page {
        display:flex;
        width:100%;
        height:100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Roboto Italic";
        color: ${({theme}) => theme.navbarColor};
    }
    
    .home-page h1 {
        color: ${({theme}) => theme.headerTitle};
        font-family: 'Roboto Light';
        font-size: 3em;
    }

    .home-page h2 {
        color: ${({theme}) => theme.headerSubTitle};
        font-family: 'Roboto Light';
        font-size: 1.5em;
    }
    .projects-page {
        display:flex;
        width:100%;
        height:100%;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        font-family: "Roboto Italic";
        color: ${({theme}) => theme.navbarColor};
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .cards a {
        text-decoration: none;
        display: flex;
        padding: 1rem;
    }
    .cards_item {
        display: flex;
        width: 33.3333%;
    }
    .cards a .card {
        border-radius: 0.25rem;
        background: ${({theme}) => theme.navbarBackground};
        box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: .3rem;
    }
      
    .cards a .card_content {
        padding: 0.5rem;
        background:  ${({theme}) => theme.navbarColor};
    }
      
    .cards a .card_title {
        color: #ffffff;
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: capitalize;
        margin: 0px;
    }
      
    .cards a .card_text {
        color: #ffffff;
        font-size: 0.875rem;
        line-height: 1.25;
        margin-bottom: .75rem;    
        font-weight: 400;
    }
      
    .cards a img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }

    .cards a .btn {
        color: ${({theme}) => theme.navbarBackground};
        padding: 0.8rem;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 4px;
        font-weight: 400;
        display: block;
        width: 100%;
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.navbarBackground};
        background: transparent;
      }
      
      .cards a .btn:hover {
        background: ${({theme}) => theme.navbarBackground};
        color: ${({theme}) => theme.navbarColor};
      }
}

@media screen and (min-width: 760px){

    .content {
        flex-direction: row;
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
        width: 80vw;
        height: 100%;
    }

    .content-navbar {
        display:flex;
        width: 20vw;
        height: 100%;
    }

    .navbar {
        width:50vw;
        display:block;
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
        justify-content: flex-start;
        align-items: flex-start;
        padding: 2em;
        border-right: 1px solid ${({ theme }) => theme.headerSubTitle};
    }
    
    .navbar ul li {
        padding: 0 2px;
        width:100%;
    }
    .navbar ul li:hover {
        border-right: 1px solid ${({ theme }) => theme.headerSubTitle};
    }
    
    .navbar ul li a {
        text-decoration: none;
        color: ${({ theme }) => theme.navbarColor};
        text-transform: uppercase;
        font-family: 'Roboto Bold';
        font-size: 32px;
    }
    .navbar ul li a:hover {
        color: ${({ theme }) => theme.hover};
    }

    .navbar ul li button {
        border: none;
        background:none;
        color: ${({ theme }) => theme.navbarColor};
        text-transform: uppercase;
        font-family: 'Roboto Bold';
        font-size: 32px;
        cursor:pointer;
    }
    .navbar ul li button:hover {
        color: ${({ theme }) => theme.hover};
    }
    .open-menu {
        display:none;
    }

    .sidebar {
        display:none;
    }
      
    #main {
        transition: margin-left .5s;
        padding: 16px;
    }
    
    .home-page {
        display:flex;
        width:100%;
        height:100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Roboto Italic";
        color: ${({theme}) => theme.navbarColor};
    }
    
    .home-page h1 {
        color: ${({theme}) => theme.headerTitle};
        font-family: 'Roboto Light';
        font-size: 4em;
    }

    .home-page h2 {
        color: ${({theme}) => theme.headerSubTitle};
        font-family: 'Roboto Light';
        font-size: 2em;
    }
    .projects-page {
        display:flex;
        width:100%;
        height:100%;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        font-family: "Roboto Italic";
        color: ${({theme}) => theme.navbarColor};
    }
      
      .cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .cards a {
          text-decoration: none;
          display: flex;
          padding: 1rem;
      }
      .cards_item {
        display: flex;
        width: 33.3333%;
      }
      .cards a .card {
        padding: .5rem;
        background: ${({theme}) => theme.navbarBackground};
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      
      .cards a .card_content {
        padding: 1rem;
        background: linear-gradient(to bottom left, ${({theme}) => theme.navbarColor} 40%, ${({theme}) => theme.navbarText} 100%);
      }
      
      .cards a .card_title {
        color: ${({theme}) => theme.body};
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: capitalize;
        font-family: "Roboto Bold";
        margin: 0px;
      }
      
      .cards a .card_text {
        color: ${({theme}) => theme.navbarBackground};
        font-size: 0.875rem;
        font-family: "Roboto Light";
        line-height: 1.5;
        margin-bottom: 1.25rem;    
        font-weight: 400;
      }
      
    .cards a img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
    }
    .cards a .btn {
        color: ${({theme}) => theme.navbarBackground};
        padding: 0.8rem;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 4px;
        font-weight: 400;
        display: block;
        width: 100%;
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.navbarBackground};
        background: transparent;
      }
      
      .cards a .btn:hover {
        background-color: ${({theme}) => theme.navbarBackground};
        color: ${({theme}) => theme.navbarColor};
      }
}

`