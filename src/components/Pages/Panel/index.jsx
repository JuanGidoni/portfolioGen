import { Redirect } from 'react-router-dom'
import AdminPanel from "../../Organisms/AdminPanel"
import UserPanel from "../../Organisms/UserPanel"

const Panel = ({user, config, isAuth}) => {


 return (
  isAuth ? <div className="home-page">
   {
    user && user.uid === process.env.REACT_APP_adminId ?
     <AdminPanel user={user} isAdmin={true} config={config} /> : <UserPanel user={user} />
   }
  </div> :
  <Redirect to="/"/>)
}

export default Panel
