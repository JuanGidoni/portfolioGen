import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Imports of Components
import Home from '../Pages/Home';
import Notfound from '../Pages/Notfound';
import ProjectList from '../Pages/ProjectList';
import Navbar from '../Organisms/Navbar';
import Project from '../Organisms/Project';
import Footer from '../Organisms/Footer';

const Component = () => {
 return (
  <div className="App">
   <Router>
    <Navbar />
    <Switch>
     <Route exact path="/">
      <Home />
     </Route>
     <Route exact path="/projects">
      <ProjectList />
     </Route>
     <Route exact path="/projects/:id">
      <Project />
     </Route>
     <Route path="*">
      <Notfound />
     </Route>
    </Switch>
   </Router>
   <Footer />
  </div>
 )
}

export default Component
