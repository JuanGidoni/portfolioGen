import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../../Molecules/Post'
import { getFirestore } from '../../Contexts/FireBase'
import Loader from '../../Atoms/Loader';

const PostLoad = () => {
  const { id } = useParams()
  const [blogPost, setBlogPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const db = getFirestore
 
  const getPosts = async (id) => {
   const itemCollection = db.collection("posts")
   const item = itemCollection.doc(id)
   item.get().then((doc) => {
       if (!doc.exists) {
           console.log('Item does not exist!')
           return
       }
       console.log('Item found')
       setBlogPost([{ id: doc.id, item: doc.data() }])
   }).catch((err) => {
       console.log(err)
   }).finally(() => {
       setLoading(false)
   })
  }
  
  useEffect(() => {
        if (id) {
         getPosts(id)
         }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
 return (
   loading ? <Loader /> :
  <div className="content-pages">
    {blogPost && blogPost.length > 0 ? blogPost.map(
      (value) => <Post key={value.id} title={value.item.title} description={value.item.description} 
      subject={value.item.subject} message={value.item.message} image={value.item.image}
      time={value.item.time} />
    ) : "No posts found..."}
  </div>
 )
}

export default PostLoad
