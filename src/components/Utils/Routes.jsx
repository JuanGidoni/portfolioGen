import { Switch, Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../Contexts/AppContext';

import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import ProjectList from '../Pages/ProjectList';
import Navbar from '../Organisms/Navbar';
import Project from '../Organisms/Project';
import PrivateRoute from './PrivateRoute';
import Panel from '../Pages/Panel';
import Login from '../Pages/Login';
import Blog from '../Pages/Blog';
import PanelAddPost from '../Pages/PanelAddPost';
import PanelAddProject from '../Pages/PanelAddProject';
import PostLoad from '../Organisms/PostLoad';

const Routes = () => {

 const { logout, config } = useAppContext()
 

   return (
           <div className="content">
           <Navbar config={config} />
               <div className="content-pages">
               <Switch>
               <Route exact path="/" render={(props) => (
                 <Home {...props} config={config} />
               )} /> 
               <Route exact path="/login" component={Login} />
               <Route exact path="/projects" component={ProjectList} />
               <Route exact path="/projects/:id" component={Project} />
               <Route exact path="/blog" component={Blog} />
               <Route exact path="/post/:id" component={PostLoad} />
                <PrivateRoute exact path="/panel" component={Panel} />
                <PrivateRoute exact path="/panel/project/add" component={PanelAddProject} />
                <PrivateRoute exact path="/panel/blog/add" component={PanelAddPost} />
                <PrivateRoute exact path="/logout" component={() => {
                   logout()
                   return <Redirect to="/" />
                 }} />
                 <Route path="*" component={Notfound} />
               </Switch>
               </div>
               </div>
   )
}

export default Routes
