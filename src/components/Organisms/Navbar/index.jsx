import { useState } from 'react'
import { useAppContext } from '../../Contexts/AppContext'
import PublicMenu from './PublicMenu'
import Sidebar from './Sidebar'
import { FaBars, FaMoon, FaSun, FaFlagUsa, FaFlag } from 'react-icons/fa'

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
          <FaFlagUsa />
        </button>
        :
        <button className="togglerLang" onClick={() => toggleLang("es")}>
          <FaFlag />
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
