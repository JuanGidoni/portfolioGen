
import FormToAddPost from "../../Organisms/FormToAddPost"

const PanelAddPost = ({user, config}) => {
 return (
  user && user.uid === process.env.REACT_APP_adminId ? 
   <div className="home-page">
    <h2>{config.pagecontents.panel.blog.add.text}</h2>
    <FormToAddPost 
      formTexts={config.pagecontents.panel.blog.form}
      addText={config.pagecontents.panel.blog.add.button}
      user={user}
      error={config.errors.perms} />
   </div> : config.errors.perms
 )
}

export default PanelAddPost
