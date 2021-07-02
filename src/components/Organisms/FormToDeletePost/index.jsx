import { useState } from "react"
import Loader from "../../Atoms/Loader"
import { usePanelContext } from "../../Contexts/PanelContext"
import { getFirestore, storage } from "../../Contexts/FireBase"

const FormToDeletePost = ({ formTexts, buttonText, user, error, buttons }) => {

  const { loading, deleteLoader, setDeleteLoader, posts, setPosts } = usePanelContext()
  const [postId, setPostId] = useState();
  const [status, setStatus] = useState();

  const deleteImage = (pictureUrl) => {
    console.log('Execute: deleteImage');
    setDeleteLoader(true)
      const deleteImage = storage.refFromURL(pictureUrl)
      deleteImage.delete().then(
        () => {
        setDeleteLoader(false);
        }
      ).catch(
        err => console.log(err)
      );
  }

  const db = getFirestore

  const deletePost = (postId) => {
    const categoryCollection = db.collection("posts")
    categoryCollection.doc(postId).get().then(querySnapshot => {
      if (querySnapshot.size === 0) {
        setStatus('Post not found or empty...')
      } else {
        deleteImage(querySnapshot.data().image)
        querySnapshot.ref.delete()
        const indexFinded = posts.findIndex(v => v.id === postId);
        if(indexFinded >= 0 ? 1 : 0){
          const temporalPosts = [...posts];
          temporalPosts.splice(indexFinded, indexFinded >= 0 ? 1 : 0);
          setPosts(temporalPosts)
          setStatus('Post Deleted...')
        }else{
          setStatus("Item Index Not Found or Invalid postId");
        }
      }
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setStatus('')
    })
  }

  return (
    user && user.uid === process.env.REACT_APP_adminId ?
      loading ? <Loader /> :
        <div className="form">
          <select onChange={(e) => setPostId(e.target.value)} className="mb-1">
            {posts && posts.length > 0 ? posts.map(
              (v, i) => <option key={v.id} value={v.id} style={{ background: "black", color: "white" }}>{v.item.title}</option>
            ) : <option>No Posts Found</option>}
          </select>
          {deleteLoader ? <Loader /> :
            <button className="btn-admin" onClick={() => deletePost(postId)}>{buttonText}</button>
          }
          <p>{status}</p>
        </div> : error
  )
}

export default FormToDeletePost
