import { useParams } from 'react-router-dom'

const Post = () => {
 const { id } = useParams()
 return (
  <div>
   This is my {id} post.
  </div>
 )
}

export default Post
