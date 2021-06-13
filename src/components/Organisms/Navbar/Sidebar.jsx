import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import ListItem from "../../Molecules/ListItem"

const Sidebar = ({
 isAuth,
 isToggled,
 setIsToggled,
 userData,
 signInWithGoogle,
 menu
}) => {

 return (
  <div className={`sidebar ${isToggled ? 'toggled' : ''}`}>
   <button className="closebtn" onClick={() => setIsToggled(!isToggled)}><FaTimes /></button>
   <div onClick={() => setIsToggled(!isToggled)}>
    {
     menu && menu.length > 0 ? menu.map(
      (v, i) => {
       if (isAuth && v.where === "logout") return <ListItem key={i} where={v.where} isNav={true}>{v.text}</ListItem>
       if (!isAuth && v.where === "login") return <ListItem key={i} signInWithGoogle={signInWithGoogle} where={v.where} isNav={true} login={true}>{v.text}</ListItem>
       if (v.where !== "logout" && v.where !== "login" && v.where !== 'panel') return <ListItem key={i} where={v.where} isNav={true}>{v.text}</ListItem>
       return false
      }
     ) : <p>Menu not found</p>
    }
    {isAuth && <li><Link to="/panel">Panel</Link></li>}
   </div>
  </div>
 )
}

export default Sidebar
