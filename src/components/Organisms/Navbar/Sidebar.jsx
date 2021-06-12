import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({
 isAuth,
 isToggled,
 setIsToggled,
 userData,
 signInWithGoogle
}) => {

 return (
  <div className={`sidebar ${isToggled ? 'toggled' : ''}`}>
   <button className="closebtn" onClick={() => setIsToggled(!isToggled)}><FaTimes /></button>
   <li>
    <Link to="/" onClick={() => setIsToggled(!isToggled)}>Home</Link>
   </li>
   <li>
    <Link to="/projects" onClick={() => setIsToggled(!isToggled)}>Projects List</Link>
   </li>
   {isAuth ? <>
    <li>
     <Link to="/panel" onClick={() => setIsToggled(!isToggled)}>Panel</Link>
    </li>
    <li>
     <Link to="/logout" onClick={() => setIsToggled(!isToggled)}>Logout</Link>
    </li> </>
    :
    <li>
     <Link to="/login" onClick={() => {
      signInWithGoogle()
      setIsToggled(!isToggled)
     }}>Login</Link>
    </li>
   }
  </div>
 )
}

export default Sidebar