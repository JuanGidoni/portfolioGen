import { en, es } from './Languages'

const globalConfig = (lang) => {

  if(lang === 'es'){
    return es
  }
  return en

}

const themeConfig = {
  colors: {
    dark: {
     body: '#141414',
     text: '#f0f0f0',
     navbarText: '#f0f0f0',
     navbarBackground: '#353535',
     navbarHover: '#c9c9c9',
     heading: '#EBF540',
     subHeading: '#982EF5',
     links: '#982EF5',
     linksHover: "#EBF540",
     buttonsBackground: '#982EF5',
     buttonsText: '#EBF540',
     buttonsHover: "#f0f0f0"
    },
    light: {
     body: '#c9c9c9',
     text: '#141414',
     navbarText: '#141414',
     navbarBackground: '#f0f0f0',
     navbarHover: '#141414',
     heading: '#EBF540',
     subHeading: '#982EF5',
     links: '#982EF5',
     linksHover: "#EBF540",
     buttonsBackground: '#982EF5',
     buttonsText: '#EBF540',
     buttonsHover: "#f0f0f0"
    }
   }
}

export {
  globalConfig,
  themeConfig
}