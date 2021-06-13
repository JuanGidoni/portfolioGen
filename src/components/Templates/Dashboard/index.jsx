import { Link } from "react-router-dom"
const Dashboard = ({user}) => {
 return (
  user && user.uid === process.env.REACT_APP_adminId ? 
   <div className="dashboard-index">
    <h2>Admin dashboard</h2>
    <Link to="/panel/project/add" className="btn-admin mb-1">Add project</Link>
    <Link to="/panel/blog/add" className="btn-admin">Add Blog Post</Link>
   </div> : "You dont have permission to be here."
 )
}

export default Dashboard
