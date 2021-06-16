import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../Contexts/FireBase'
import Loader from '../../Atoms/Loader';

const ProjectList = () => {

  const [projects, setProjects] = useState(null)
  const [loading, setLoading] = useState(true)

  const db = getFirestore

  const getProjects = () => {
    const categoryCollection = db.collection("projects")
    categoryCollection.get().then(querySnapshot => {
      if (querySnapshot.size === 0) {
        console.log('Projects not found or empty...')
      } else {
        setProjects(querySnapshot.docs.map(doc => ({
          id: doc.id,
          item: doc.data()
        })))
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
    getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    loading ? <Loader /> :
    <div className="projects-page">
        <div className="cards">
          {projects && projects.length > 0 ? projects.map(
            (v) =>
              <li key={v.id} className="cards_item">
              <Link to={`/projects/${v.id}`}>
                  <div className="card">
                    <div className="card_image"><img src={v.item.image} alt={v.item.description} /></div>
                      <div className="card_content">
                        <h2 className="card_title">{v.item.title}</h2>
                        <p className="card_text">{v.item.role}</p>
                        <button className="btn card_btn">Read More</button>
                      </div>
                  </div>
              </Link>
              </li>
          ) : "Projects not found..."}
        </div>
    </div>
  )
}

      export default ProjectList
