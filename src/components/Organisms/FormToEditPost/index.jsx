import { useState } from "react"
import Loader from "../../Atoms/Loader"
import { getFirestore, getFirebase, storage } from "../../Contexts/FireBase"

const FormToAddPost = ({ formTexts, buttonText, user, error, buttons }) => {
  
 const [title, setTitle] = useState('')
 const [description, setDescription] = useState('')
 const [subject, setSubject] = useState('')
 const [message, setMessage] = useState('')
 const [image, setImage] = useState(null)
 const [imageUrl, setImageUrl] = useState('')
 const [imageStatus, setImageStatus] = useState(false)
 const [loaderUpload, setLoaderUpload] = useState(false)
 const [loading, setLoading] = useState(false)

 const uploadImage = () => {

  console.log('Execute: uploadImage')
  setLoaderUpload(true)
  if (!image) {
   console.log("Please select an image")
  } else {
   const uploadImage = storage.ref(`images/${image.name}`).put(image);
   uploadImage.on(
    "state_changed",
    spanshot => { },
    error => {
     console.log(error)
    }, () => {
     storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then(url => {
       console.log('Image uploaded...')
       setImageUrl(url)
       setImageStatus(true)
       setImage(null)
       setLoaderUpload(false)
      }).catch(err => console.log(err))
    })
  }
 }

 const sendFormToFireBase = async () => {

  console.log('ejecutado sendFormToFireBase')

  if(!title){
   console.log("Please add a title")
  }
  if(!description){
   console.log("Please add a description")
  }
  if(!subject){
   console.log("Please add a company")
  }
  if(!message){
   console.log("Please add a role")
  }
  if(!imageStatus){
   console.log("Please add a image first")
  }

  const fb = getFirebase
  const db = getFirestore
  
  console.log('Adding...')
  setLoading(true)
  let post = {
   title: title,
   description: description,
   subject: subject,
   message: message,
   image: imageUrl,
   time: fb.firestore.Timestamp.fromDate(new Date())
  }
  const projectCollection = db.collection('posts')
  projectCollection.add(post).then(
   res => {
    console.log(res, "Added...")
    setImageUrl('')
    setImageStatus(false)
    setTitle('')
    setDescription('')
    setSubject('')
    setMessage('')
    setLoading(false)
   }
  ).catch(err => {
   console.log(err)
  })

 }

 return (
  user && user.uid === process.env.REACT_APP_adminId ?
  loading ? <Loader /> :
   <div className="form">
    <input className="mb-1" type="text" placeholder={formTexts.title} onChange={(e) => setTitle(e.target.value)} />
    <input className="mb-1" type="text" placeholder={formTexts.description} onChange={(e) => setDescription(e.target.value)} />
    <input className="mb-1" type="text" placeholder={formTexts.subject} onChange={(e) => setSubject(e.target.value)} />
    <input className="mb-1" type="text" placeholder={formTexts.message} onChange={(e) => setMessage(e.target.value)} />
   <div className="upload-image mb-1">
     <input type="file" placeholder="Select image" onChange={(e) => setImage(e.target.files[0])} />
     {loaderUpload ? <Loader /> : 
     <button className="btn-upload" onClick={() => uploadImage()}>{buttons.upload}</button>
     }
    </div>
    <button className="btn-admin" onClick={() => sendFormToFireBase()}>{buttonText}</button>
   </div> : error
 )
}

export default FormToAddPost
