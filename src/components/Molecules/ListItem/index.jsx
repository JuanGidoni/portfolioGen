import { Link } from 'react-router-dom'

const ListItem = ({ children, where, isNav, setIsToggled, isToggled, login, signInWithGoogle }) => {

 const normalLink = <li>
  <Link to={`/${where}`}>{children}</Link>
 </li>

 const loginLink = <li>
  <button to={`/${where}`} onClick={() => signInWithGoogle()}>{children}</button>
 </li>
 if (login)
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
