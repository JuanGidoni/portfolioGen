import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Atoms/Loader'
import { getFirestore } from '../../Contexts/FireBase'

const Project = () => {

 const { id } = useParams()
 const [project, setProject] = useState(null)
 const [loading, setLoading] = useState(true)
 const db = getFirestore

 const getProject = async (id) => {
  const itemCollection = db.collection("projects")
  const item = itemCollection.doc(id)
  item.get().then((doc) => {
      if (!doc.exists) {
          console.log('Item does not exist!')
          return
      }
      console.log('Item found')
      setProject({ id: doc.id, item: doc.data() })
  }).catch((err) => {
      console.log(err)
  }).finally(() => {
      setLoading(false)
  })
 }
 
 useEffect(() => {
       if (id) {
        getProject(id)
        }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [id])
 return (
  <div>
   {loading ? <Loader /> : 
   <div className="project">
    {project.id}
    <div className="project-description">
    {project.item.description}
    </div>
   </div>}
  </div>
 )
}

export default Project
