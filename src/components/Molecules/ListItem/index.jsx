import { Link } from 'react-router-dom'
import { useAppContext } from '../../Contexts/AppContext'

const ListItem = ({ children, where, isNav, setIsToggled, isToggled, isLogin, isLogout }) => {

const { signInWithGoogle, logout } = useAppContext()

 const normalLink = <li>
  <Link to={`/${where}`}>{children}</Link>
 </li>

 const logoutLink = <li>
 <button to={`/${where}`} onClick={() => logout()}>{children}</button>
</li>

 const loginLink = <li>
  <button to={`/${where}`} onClick={() => signInWithGoogle()}>{children}</button>
 </li>

 if(isLogout)
  return logoutLink
 if (isLogin)
  return loginLink
 if (isNav)
  return normalLink

 return (
  <li>
   <Link to={`/${where}`} onClick={() => setIsToggled(!isToggled)}>{children}</Link>
  </li>
 )
}

export default ListItem
