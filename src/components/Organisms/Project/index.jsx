import { useParams } from 'react-router-dom'

const Project = () => {
 const { id } = useParams()
 return (
  <div>
   This is a project with id: {id}
  </div>
 )
}

export default Project
