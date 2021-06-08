import { AppProvider } from "./Contexts/AppContext";
import { BrowserRouter as Router } from "react-router-dom"
import Content from './Templates/Content'

// Styles
import './Templates/styles/App.css';

const App = () => {
  return (
    <div>
        <Router style={{ minHeight: "100vh" }}>
          <AppProvider>
            <Content />
          </AppProvider>
        </Router>
    </div>
  );
}

export default App;
