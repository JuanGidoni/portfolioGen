import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../Contexts/FireBase'
import Loader from '../../Atoms/Loader';

const Blog = () => {

  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)

  const db = getFirestore

  const getPosts = () => {
    const categoryCollection = db.collection("posts")
    categoryCollection.get().then(querySnapshot => {
      if (querySnapshot.size === 0) {
        console.log('Post not found or empty...')
      } else {
        setPosts(querySnapshot.docs.map(doc => ({
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
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    loading ? <Loader /> :
    <div className="projects-page">
        <div className="cards">
          {posts && posts.length > 0 ? posts.map(
            (v) =>
              <li key={v.id} className="cards_item">
              <Link to={`/post/${v.id}`}>
                  <div className="card">
                    <div className="card_image"><img src={v.item.image} alt={v.item.description} /></div>
                      <div className="card_content">
                        <h2 className="card_title">{v.item.title}</h2>
                        <p className="card_text">{v.item.description}</p>
                        <button className="btn card_btn">Read More</button>
                      </div>
                  </div>
              </Link>
              </li>
          ) : "Post not found..."}
        </div>
    </div>
  )
}

export default Blog
