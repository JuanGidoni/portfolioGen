import Dashboard from '../../Templates/Dashboard'

const AdminPanel = ({ user }) => {
 return (
  user && user.uid === process.env.REACT_APP_adminId ?
   <div className="admin-panel">
    Welcome, {user.displayName}
    <Dashboard user={user} />
   </div> : "You dont have permission to be here."
 )
}

export default AdminPanel
