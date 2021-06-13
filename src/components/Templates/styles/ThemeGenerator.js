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

.btn {
    font-size: 20px;
    cursor: pointer;
    background-color: none;
    color:  ${({ theme }) => theme.navbarColor};
    padding: 10px 15px;
    border: none;
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

.dashboard-index a {
    text-decoration: none;
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

.content {
    display:flex;
    width:100vw;
    height: 100vh;
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

.open-menu {
    position:fixed;
    top:0;
    left:0;
    padding: .5em .5em;
    background:none;
    display:block;
}

.open-menu:hover {
    color: ${({ theme }) => theme.hover};
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
    list-style: none;
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
    width: 50vw;
}  

.sidebar li button {
    padding: 8px 8px 8px 32px;
    border: none;
    background:none;
    color: ${({ theme }) => theme.navbarColor};
    text-transform: uppercase;
    font-family: 'Roboto Bold';
    font-size: 16px;
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

.home-page h1 {
    text-align: center;
    color: ${({theme}) => theme.headerTitle};
    font-family: 'Roboto Light';
    font-size: 2em;
}
.home-page h2 {
    text-align: center;
    color: ${({theme}) => theme.headerSubTitle};
    font-family: 'Roboto Light';
    font-size: 1em;
}

.footer {
    width: 100vw;
    height: 3vh;
    text-align: center;
    font-size: 8px;
    font-family: "Roboto Light";
    background: ${({theme}) => theme.navbarBackground};
}

.footer button:hover {
    color: ${({ theme }) => theme.hover};
}
.footer a {
    text-decoration: none;
    color: ${({theme}) => theme.navbarBackground};
}

.footer a:hover {
    color: ${({ theme }) => theme.hover};
}
.dashboard-index {
    display: flex;
    flex-direction: column;
}
.mb-1 {
    margin-bottom: 10px;
}

@media screen and (max-height: 450px) {
    .sidebar {
        padding-top: 15px;
    }
    .sidebar a {
        font-size: 18px;
    }
}

@media screen and (min-width: 560px){

    .content {
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
    .navbar ul li a:hover {
        color: ${({ theme }) => theme.hover};
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
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Roboto Italic";
        color: ${({theme}) => theme.navbarColor};
    }
    
    .home-page h1 {
        color: ${({theme}) => theme.headerTitle};
        font-family: 'Roboto Light';
        font-size: 2em;
    }

    .home-page h2 {
        color: ${({theme}) => theme.headerSubTitle};
        font-family: 'Roboto Light';
        font-size: 1.3em;
    }
    
    .footer {
        width: 100vw;
        height: auto;
        text-align: center;
        font-size: 8px;
        font-family: "Roboto Light";
        color: ${({theme}) => theme.navbarBackground};
        background:none;
    }

    .cards {
        display: flex;
        padding: 1rem;
        margin-bottom: 2rem;
        width: 100%;
    }
    
    .cards a {
        text-decoration: none;
    }

    .card-item {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 6px;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        overflow: hidden;
        transition: transform 0.5s;
        -webkit-transition: transform 0.5s;
    }

    .card-item:hover {
        cursor: pointer;
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
    }

    .card-item:hover .card-image {
        opacity: 1;
    }

    .card-info {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        padding: 1rem;
        line-height: 1.5em;
    }
    
    .card-title {
        font-size: 25px;
        line-height: 1.1em;
        color: #32325d;
        margin-bottom: 0.2em;
    }
    .card-intro {
        font-size:13px;
    }

    .card-image{
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 6px 6px 0px 0px;
        opacity: 0.91;
    }

}

@media(min-width: 40rem) {
    .cards {
        width: 50%;
    }
}
@media(min-width: 56rem) {
    .cards {
        width: 33.3%;
    }
}

`
