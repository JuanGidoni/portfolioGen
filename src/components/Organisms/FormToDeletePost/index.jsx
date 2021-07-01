import { useState } from "react"
import Loader from "../../Atoms/Loader"
import { useBlogContext } from "../../Contexts/BlogContext"
import { getFirestore, getFirebase, storage } from "../../Contexts/FireBase"

const FormToAddPost = ({ formTexts, buttonText, user, error, buttons }) => {

  const { loading, setLoading, deleteLoader, setDeleteLoader, posts, setPosts } = useBlogContext()
  const [postId, setPostId] = useState()
  const deleteImage = (pictureUrl) => {
    console.log('Execute: deleteImage')
    setDeleteLoader(true)
    if (!pictureUrl) {
      console.log("Please select an image")
    } else {
      const deleteImage = storage.refFromURL(pictureUrl)
      deleteImage.delete().then(
        setDeleteLoader(false)
      ).catch(
        err => console.log(err)
      )
    }
  }

  const fb = getFirebase
  const db = getFirestore

  const deletePost = (postId) => {
    const categoryCollection = db.collection("posts")
    categoryCollection.where('id', "==", postId).get().then(querySnapshot => {
      if (querySnapshot.size === 0) {
        console.log('Post not found or empty...')
      } else {
        querySnapshot.docs[0].ref.delete()
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    user && user.uid === process.env.REACT_APP_adminId ?
      loading ? <Loader /> :
        <div className="form">
          <select onChange={(e)=> setPostId(e.target.value)}>
          {posts && posts.length > 0 ? posts.map(
            (v,i) => <option value={v.id} style={{background: "black", color: "white"}}>{v.item.title}</option>
          ) : <option>No Posts Found</option>}
          </select>
          <div className="upload-image mb-1">
            {deleteLoader ? <Loader /> :
              <button className="btn-upload" onClick={() => deleteImage()}>{buttons.delete}</button>
            }
          </div>
          <button className="btn-admin" onClick={()=> deletePost(postId)}>{buttonText}</button>
          <p>{postId} : Post Id</p>
        </div> : error
  )
}

export default FormToAddPost
