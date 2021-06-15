import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import ListItem from "../../Molecules/ListItem"
import Footer from '../../Organisms/Footer';
import UserAvatar from "../../Atoms/UserAvatar";

const Sidebar = ({
 isAuth,
 isToggled,
 setIsToggled,
 userData,
 menu,
 author,
 web, 
 year
}) => {

 return (
  <div className={`sidebar ${isToggled ? 'toggled' : ''}`}>
   <button className="closebtn" onClick={() => setIsToggled(!isToggled)}><FaTimes /></button>
   <div onClick={() => setIsToggled(!isToggled)}>
   {isAuth ? <UserAvatar image={userData.photoURL} name={userData.displayName} /> : '' }
    {
     menu && menu.length > 0 ? menu.map(
      (v, i) => {
       if (isAuth && v.where === "logout") return <ListItem key={i} where={v.where} isNav={true} isLogout={true}>{v.text}</ListItem>
       if (!isAuth && v.where === "login") return <ListItem key={i} where={v.where} isNav={true} isLogin={true}>{v.text}</ListItem>
       if (v.where !== "logout" && v.where !== "login" && v.where !== 'panel') return <ListItem key={i} where={v.where} isNav={true}>{v.text}</ListItem>
       return false
      }
     ) : <p>Menu not found</p>
    }
    {isAuth && <li><Link to="/panel">Panel</Link></li>}
   </div>
     <Footer author={author} web={web} year={year}/>
  </div>
 )
}

export default Sidebar
