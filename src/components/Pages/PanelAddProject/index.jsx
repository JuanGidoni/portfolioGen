import { useAppContext } from "../../Contexts/AppContext"
import FormToAddProject from "../../Organisms/FormToAddProject"

const PanelAddProject = () => {
 const { userData, config } = useAppContext()
 return (
  userData && userData.uid === process.env.REACT_APP_adminId ? 
   <div className="home-page">
    <h2>{config.pagecontents.panel.project.add.text}</h2>
    <FormToAddProject 
      formTexts={config.pagecontents.panel.project.form}
      addText={config.pagecontents.panel.project.add.button}
    />
   </div> : config.errors.perms
 )
}

export default PanelAddProject
