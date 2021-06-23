import { formatedDate } from "../../Utils/Date"
const Post = ({
 title,
 description,
 subject,
 message,
 image,
 time
}) => {

 return (
  <div className="content-resume">
   <div className="posts-page">
    <div className="posts-grid">

     <div className="post-image">
      <img src={image} alt={title} />
     </div>

     <div className="post-time">
      <p>
       {formatedDate(time.toDate())}
      </p>
     </div>

     <div className="post-title">
      <h2>{title}</h2>
     </div>

     <div className="post-description">
      <h3>{description}</h3>
     </div>

     <div className="post-content-grid">

      <div className="post-subject">
       <h4>{subject}</h4>
      </div>

      <div className="post-message">
       <p>{message}</p>
      </div>
     </div>

    </div>
   </div>
  </div>
 )
}

export default Post
