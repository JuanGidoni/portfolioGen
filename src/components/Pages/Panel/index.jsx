import { Redirect } from 'react-router-dom'
import { useAppContext } from "../../Contexts/AppContext"
import AdminPanel from "../../Organisms/AdminPanel"
import UserPanel from "../../Organisms/UserPanel"

const Panel = () => {

 const { userData, isAuth } = useAppContext()

 return (
  isAuth ? <div className="home-page">
   {
    userData && userData.uid === process.env.REACT_APP_adminId ?
     <AdminPanel user={userData} isAdmin={true} /> : <UserPanel user={userData} />
   }
  </div> :
  <Redirect to="/"/>)
}

export default Panel
