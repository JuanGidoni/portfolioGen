
import FormToAddPost from "../../Organisms/FormToAddPost"
import FormToDeletePost from "../../Organisms/FormToDeletePost"
import FormToEditPost from "../../Organisms/FormToEditPost"

const PanelAddPost = ({user, config}) => {
 return (
  user && user.uid === process.env.REACT_APP_adminId ? 
   <div className="home-page">
    <h2>{config.pagecontents.panel.blog.add.text}</h2>
    <FormToAddPost 
      formTexts={config.pagecontents.panel.blog.form}
      buttonText={config.pagecontents.panel.blog.add.button}
      user={user}
      error={config.errors.perms} />
   </div> : config.errors.perms
 )
}

const PanelDeletePost = ({user, config}) => {
  return (
   user && user.uid === process.env.REACT_APP_adminId ? 
    <div className="home-page">
     <h2>{config.pagecontents.panel.blog.delete.text}</h2>
     <FormToDeletePost
       formTexts={config.pagecontents.panel.blog.form}
       buttons={config.pagecontents.panel.buttons}
       buttonText={config.pagecontents.panel.blog.delete.button}
       user={user}
       error={config.errors.perms} />
    </div> : config.errors.perms
  )
 }

 const PanelEditPost = ({user, config}) => {
  return (
   user && user.uid === process.env.REACT_APP_adminId ? 
    <div className="home-page">
     <h2>{config.pagecontents.panel.blog.add.text}</h2>
     <FormToEditPost 
       formTexts={config.pagecontents.panel.blog.form}
       buttonText={config.pagecontents.panel.blog.add.button}
       user={user}
       error={config.errors.perms} />
    </div> : config.errors.perms
  )
 }

export {
  PanelAddPost,
  PanelDeletePost,
  PanelEditPost
}
