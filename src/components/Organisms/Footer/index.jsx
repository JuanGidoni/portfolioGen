import { useAppContext } from "../../Contexts/AppContext"
import { FaMoon, FaSun } from 'react-icons/fa'
const Footer = ({ author, web, year }) => {

 const { theme, toggleTheme } = useAppContext()

 return (
  <footer className="footer">
   Copyright @ {year} - <a href={`${web}`} target="_BLANK" rel="noreferrer">{author}</a>
   
   <div className="buttonsColors">
    {theme === 'light' ? 
    <button className="togglerTheme" onClick={() => toggleTheme("dark")}><FaMoon/></button>
    : 
    <button className="togglerTheme" onClick={() => toggleTheme("light")}><FaSun/></button>
    }
   </div>
  </footer>
 )
}

export default Footer
