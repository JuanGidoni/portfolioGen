import { useState } from 'react'
import { useAppContext } from '../../Contexts/AppContext'
import PublicMenu from './PublicMenu'
import Sidebar from './Sidebar'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import esIcon from '../../../assets/flags/es.svg'
import enIcon from '../../../assets/flags/en.svg'
import Icon from '../../Atoms/Icon'

const Navbar = ({ config }) => {
  const { isAuth, signInWithGoogle, userData, theme, toggleTheme, lang, toggleLang  } = useAppContext()
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="content-navbar">

      <button className="btn open-menu" onClick={() => setIsToggled(!isToggled)}>
        <FaBars />
      </button>

      {
      theme === 'light' ?
        <button className="togglerTheme" onClick={() => toggleTheme("dark")}>
          <FaMoon />
        </button>
        :
        <button className="togglerTheme" onClick={() => toggleTheme("light")}>
          <FaSun />
        </button>
      }
      {
        lang === "es" ? 
        <button className="togglerLang" onClick={() => toggleLang("en")}>
          <Icon image={enIcon} title="Set language to English" style={{width: "100%"}} />
        </button>
        :
        <button className="togglerLang" onClick={() => toggleLang("es")}>
        <Icon image={esIcon} title="Establecer idioma a español" style={{width: "100%"}} />
        </button>
      }
      
      <PublicMenu
        isAuth={isAuth}
        userData={userData}
        menu={config.menu}
        author={config.author}
        web={config.linkedin}
        year={config.year}
      />

      <Sidebar
        isAuth={isAuth}
        signInWithGoogle={signInWithGoogle}
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        userData={userData}
        menu={config.menu}
        author={config.author}
        web={config.linkedin}
        year={config.year}
      />
    </div>
  )
}

export default Navbar
