import { useState } from 'react'
import { useAppContext } from '../../Contexts/AppContext'
import PublicMenu from './PublicMenu'
import Sidebar from './Sidebar'

const Navbar = () => {
 const { isAuth, signInWithGoogle, userData, config } = useAppContext()
 const [isToggled, setIsToggled] = useState(false)
 return (
  <div className="content-navbar">
   <div className="navbar">

    <PublicMenu
     isAuth={isAuth}
     signInWithGoogle={signInWithGoogle}
     isToggled={isToggled}
     setIsToggled={setIsToggled}
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
  </div>
 )
}

export default Navbar
