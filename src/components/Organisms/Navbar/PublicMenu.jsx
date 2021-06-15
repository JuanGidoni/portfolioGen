import ListItem from "../../Molecules/ListItem"
import { Link } from 'react-router-dom'
import Footer from '../../Organisms/Footer';
import UserAvatar from "../../Atoms/UserAvatar";

const PublicMenu = ({
  isAuth,
  userData,
  menu,
  author,
  web, 
  year
}) => {

  return (
    <div className="navbar">
      {isAuth ? <UserAvatar image={userData.photoURL} name={userData.displayName} /> : '' }
      <ul>
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
        {isAuth && <li><Link to="/panel" >Panel</Link></li>}
      <Footer author={author} web={web} year={year}/>
      </ul>
    </div>
  )
}

export default PublicMenu
