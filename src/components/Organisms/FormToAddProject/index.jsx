import { useState } from "react"
import Loader from "../../Atoms/Loader"
import { getFirestore, getFirebase, storage } from "../../Contexts/FireBase"

const FormToAddProject = ({ formTexts, addText, user }) => {
  
 const [title, setTitle] = useState('')
 const [description, setDescription] = useState('')
 const [company, setCompany] = useState('')
 const [role, setRole] = useState('')
 const [techs, setTechs] = useState('')
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
  if(!company){
   console.log("Please add a company")
  }
  if(!role){
   console.log("Please add a role")
  }
  if(!techs){
   console.log("Please add a techs")
  }
  if(!imageStatus){
   console.log("Please add a image first")
  }

  const fb = getFirebase
  const db = getFirestore
  
  console.log('Adding...')
  setLoading(true)
  let project = {
   title: title,
   description: description,
   company: company,
   role: role,
   techs: techs,
   image: imageUrl,
   time: fb.firestore.Timestamp.fromDate(new Date())
  }
  const projectCollection = db.collection('projects')
  projectCollection.add(project).then(
   res => {
    console.log(res, "Added...")
    setImageUrl('')
    setImageStatus(false)
    setTitle('')
    setDescription('')
    setCompany('')
    setRole('')
    setTechs('')
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
    <input className="mb-1" type="text" placeholder={formTexts.company} onChange={(e) => setCompany(e.target.value)} />
    <input className="mb-1" type="text" placeholder={formTexts.role} onChange={(e) => setRole(e.target.value)} />
    <input className="mb-1" type="text" placeholder={formTexts.techs} onChange={(e) => setTechs(e.target.value)} />
    <div className="upload-image mb-1">
     <input type="file" placeholder="Select image" onChange={(e) => setImage(e.target.files[0])} />
     {loaderUpload ? <Loader /> : 
     <button className="btn-upload" onClick={() => uploadImage()}>{formTexts.upload}</button>
     }
    </div>
    <button className="btn-admin" onClick={() => sendFormToFireBase()}>{addText}</button>
   </div> : "You dont have permission to be here."
 )
}

export default FormToAddProject
