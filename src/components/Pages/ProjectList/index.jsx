import { Link } from 'react-router-dom'

const ProjectList = () => {
 return (
  <div>
   This is the list of projects.
   <div style={{display: 'flex', flexDirection: 'column'}}>
   <Link to="/projects/1">Project 1</Link>
   <Link to="/projects/2">Project 2</Link>
   <Link to="/projects/3">Project 3</Link>
   </div>
  </div>
 )
}

export default ProjectList
