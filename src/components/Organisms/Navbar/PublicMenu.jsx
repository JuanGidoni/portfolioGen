import ListItem from "../../Molecules/ListItem"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
const PublicMenu = ({
 isAuth,
 isToggled,
 setIsToggled,
 signInWithGoogle,
 menu
}) => {

 return (
  <ul>
   {
    menu && menu.length > 0 ? menu.map(
     (v,i) => {
      if(isAuth && v.where === "logout") return <ListItem key={i} where={v.where} isNav={true}>{v.text}</ListItem>
      if(!isAuth && v.where === "login") return <ListItem key={i} signInWithGoogle={signInWithGoogle} where={v.where} isNav={true} login={true}>{v.text}</ListItem>
      if(v.where !== "logout" && v.where !== "login" && v.where !== 'panel') return <ListItem key={i} where={v.where} isNav={true}>{v.text}</ListItem>
      return false
    }
    ) : <p>Menu not found</p>
   }
   {isAuth && <li><Link to="/panel" >Panel</Link></li>}
   <li><button className="btn" onClick={() => setIsToggled(!isToggled)}><FaBars /></button></li>
  </ul>
 )
}

export default PublicMenu