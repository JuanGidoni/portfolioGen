import { Switch, Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../Contexts/AppContext';

import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import ProjectList from '../Pages/ProjectList';
import Navbar from '../Organisms/Navbar';
import Project from '../Organisms/Project';
import Footer from '../Organisms/Footer';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';
import Panel from '../Pages/Panel';

const Routes = () => {

 const { logout, setUserData, setIsAuth } = useAppContext()

   return (
           <div style={{ height: "100vh" }} className="d-flex flex-column align-items-center justify-content-center p-0">
               <Navbar />
               <Switch>
               <Route exact path="/" component={Home} /> 
               <Route exact path="/login" component={Login} />
               <Route exact path="/projects" component={ProjectList} />
               <Route exact path="/projects/:id" component={Project} />
                <PrivateRoute exact path="/panel" component={Panel} />
                <PrivateRoute exact path="/logout" component={() => {
                   logout()
                   setUserData(null)
                   setIsAuth(false)
                   localStorage.removeItem('user')
                   return <Redirect to="/" />
                 }} />
                 <Route path="*" component={Notfound} />
               </Switch>
               <Footer />
           </div>
   )
}

export default Routes