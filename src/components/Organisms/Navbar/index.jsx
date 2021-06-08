import { Link } from 'react-router-dom'
import { useAppContext } from '../../Contexts/AppContext'

const Navbar = () => {
 const { isAuth, signInWithGoogle, userData } = useAppContext()

 return (
  <div className="navbar">
   <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/projects">Projects List</Link></li>
    {isAuth ? 
    <li><Link to="/logout">Logout</Link></li>
    :
    <li><Link to="/login" onClick={() => signInWithGoogle()}>Login</Link></li>
    }
    {
     userData && userData.email === "juan.gidoni@gmail.com" ?
     <li><Link to="/panel">Panel</Link></li>
     : ''
    }
   </ul>
  </div>
 )
}

export default Navbar
