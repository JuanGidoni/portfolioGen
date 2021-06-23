import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeGenerator"

// Imports of Components
import { useAppContext } from '../../Contexts/AppContext';
import Routes from "../../Utils/Routes";

const Content = () => {
 const { theme } = useAppContext()
 return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
   <GlobalStyles />
   <Routes />
  </ThemeProvider>
 )
}

export default Content
