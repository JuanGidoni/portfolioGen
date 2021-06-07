
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Templates/styles/ThemeGenerator"
import Component from './Utils/Component'

// Styles
import './Templates/styles/App.css';
import { useAppContext } from "./Contexts/AppContext";

const App = (props) => {
  const { theme } = useAppContext()
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles /> <Component
          {...props}
        />
      </ThemeProvider>
  );
}

export default App;
