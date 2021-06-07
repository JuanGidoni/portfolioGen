import { Link } from 'react-router-dom'

const Navbar = () => {
 return (
  <div>
   <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/projects">Projects List</Link></li>
   </ul>
  </div>
 )
}

export default Navbar
