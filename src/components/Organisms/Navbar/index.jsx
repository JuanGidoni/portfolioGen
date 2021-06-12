import { useState } from 'react'
import { useAppContext } from '../../Contexts/AppContext'
import PublicMenu from './PublicMenu'
import Sidebar from './Sidebar'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
 const { isAuth, signInWithGoogle, userData, config } = useAppContext()
 const [isToggled, setIsToggled] = useState(false)
 return (
  <div className="content-navbar">

  <button className="btn open-menu" onClick={() => setIsToggled(!isToggled)}><FaBars /></button>
  
    <PublicMenu
     isAuth={isAuth}
     signInWithGoogle={signInWithGoogle}
     isToggled={isToggled}
     userData={userData}
     menu={config.menu}
    />

    <Sidebar
     isAuth={isAuth}
     signInWithGoogle={signInWithGoogle}
     isToggled={isToggled}
     setIsToggled={setIsToggled}
     userData={userData}
     menu={config.menu}
    />
  </div>
 )
}

export default Navbar
