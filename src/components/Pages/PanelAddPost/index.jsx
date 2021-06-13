import { useAppContext } from "../../Contexts/AppContext"
import FormToAddPost from "../../Organisms/FormToAddPost"

const PanelAddPost = () => {
 const { userData } = useAppContext()
 return (
  userData && userData.uid === process.env.REACT_APP_adminId ? 
   <div className="home-page">
    <h2>Complete the next form to add a post</h2>
    <FormToAddPost />
   </div> : "You dont have permission to be here."
 )
}

export default PanelAddPost
