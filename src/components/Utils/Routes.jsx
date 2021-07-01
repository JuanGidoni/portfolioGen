import { Switch, Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../Contexts/AppContext';
import { BlogProvider } from '../Contexts/BlogContext';

import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import ProjectList from '../Pages/ProjectList';
import Navbar from '../Organisms/Navbar';
import Project from '../Organisms/Project';
import PrivateRoute from './PrivateRoute';
import Panel from '../Pages/Panel';
import Login from '../Pages/Login';
import Blog from '../Pages/Blog';
import { PanelAddPost, PanelDeletePost, PanelEditPost } from '../Pages/PanelPost';
import { PanelAddProject, PanelDeleteProject, PanelEditProject } from '../Pages/PanelProject';
import { PanelAddUser, PanelDeleteUser, PanelEditUser } from '../Pages/PanelUser';
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
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/post/:id" component={PostLoad} />
          <PrivateRoute exact path="/panel" component={Panel} />
          <BlogProvider>
          <PrivateRoute exact path="/panel/blog/add" component={PanelAddPost} />
          <PrivateRoute exact path="/panel/blog/delete" component={PanelDeletePost} />
          <PrivateRoute exact path="/panel/blog/edit" component={PanelEditPost} />
          </BlogProvider>
          <PrivateRoute exact path="/panel/project/add" component={PanelAddProject} />
          <PrivateRoute exact path="/panel/project/delete" component={PanelDeleteProject} />
          <PrivateRoute exact path="/panel/project/edit" component={PanelEditProject} />
          <PrivateRoute exact path="/panel/user/add" component={PanelAddUser} />
          <PrivateRoute exact path="/panel/user/delete" component={PanelDeleteUser} />
          <PrivateRoute exact path="/panel/user/edit" component={PanelEditUser} />
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
