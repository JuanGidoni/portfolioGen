import Dashboard from '../../Templates/Dashboard'

const AdminPanel = ({ user, config }) => {
 return (
  user && user.uid === process.env.REACT_APP_adminId ?
   <div className="admin-panel">
    {config.pagecontents.panel.welcome}, {user.displayName}
    <Dashboard user={user} config={config} />
   </div> : config.errors.perms
 )
}

export default AdminPanel
