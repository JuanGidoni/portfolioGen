import { useAppContext } from "../../Contexts/AppContext"

const Home = () => {
 const { theme, toggleTheme } = useAppContext()
 return (
  <div>
   <h1>Welcome Page</h1>
   <button onClick={() => toggleTheme(!theme)}>Toggle Theme</button>
  </div>
 )
}

export default Home
