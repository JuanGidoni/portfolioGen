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
    <div className="home-page">
      {loading ? <Loader /> :
        <div className="cards">
          {projects && projects.length > 0 ? projects.map(
            (v, i) =>
              <Link key={i} to={`/projects/${v.id}`}>
                <div className="card-item">
                  <div className="card-image" style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover", backgroundImage: `url(${v.item.image})`,
                    width: "200px", height: "100px"
                  }}>
                  </div>
                  <div className="card-info">
                    <h2 className="card-title">{v.item.title}</h2>
                    <p className="card-intro">{v.item.role}</p>
                  </div>
                </div>
              </Link>
          ) : "Projects not found..."}
        </div>
      }
    </div>
  )
}

export default ProjectList
