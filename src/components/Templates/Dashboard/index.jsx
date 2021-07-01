import { Link } from "react-router-dom"
const Dashboard = ({ user, config }) => {
  return (
    user && user.uid === process.env.REACT_APP_adminId ?
      <div className="dashboard-index">
        <div className="dashboard-title">
          <h2>{config.pagecontents.panel.title}</h2>
        </div>

        <div className="dashboard-buttons">

        <div className="dashboard-buttons-add">
          <Link to="/panel/project/add" className="btn-admin mb-1">{config.pagecontents.panel.project.add.button}</Link>
          <Link to="/panel/blog/add" className="btn-admin mb-1">{config.pagecontents.panel.blog.add.button}</Link>
          <Link to="/panel/user/add" className="btn-admin">{config.pagecontents.panel.user.add.button}</Link>
        </div>
        
        <div className="dashboard-buttons-delete">
          <Link to="/panel/project/delete" className="btn-admin mb-1">{config.pagecontents.panel.project.delete.button}</Link>
          <Link to="/panel/blog/delete" className="btn-admin mb-1">{config.pagecontents.panel.blog.delete.button}</Link>
          <Link to="/panel/user/delete" className="btn-admin">{config.pagecontents.panel.user.delete.button}</Link>
        </div>
        
        <div className="dashboard-buttons-edit">
          <Link to="/panel/project/edit" className="btn-admin mb-1">{config.pagecontents.panel.project.edit.button}</Link>
          <Link to="/panel/blog/edit" className="btn-admin mb-1">{config.pagecontents.panel.blog.edit.button}</Link>
          <Link to="/panel/user/edit" className="btn-admin">{config.pagecontents.panel.user.edit.button}</Link>
        </div>
        

        </div>
      </div> : "You dont have permission to be here."
  )
}

export default Dashboard
