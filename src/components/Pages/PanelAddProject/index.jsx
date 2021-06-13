import { useAppContext } from "../../Contexts/AppContext"
import FormToAddProject from "../../Organisms/FormToAddProject"

const PanelAddProject = () => {
 const { userData } = useAppContext()
 return (
  userData && userData.uid === process.env.REACT_APP_adminId ? 
   <div className="home-page">
    <h2>Complete the next form to add a project</h2>
    <FormToAddProject />
   </div> : "You dont have permission to be here."
 )
}

export default PanelAddProject
