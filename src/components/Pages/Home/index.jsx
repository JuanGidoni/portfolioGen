import { useAppContext } from "../../Contexts/AppContext"

const Home = () => {
 const { config } = useAppContext()
 return (
  <div className="home-page">
   <h1>{config.authorname}</h1>
   <h2>{config.authordescription}</h2>
  </div>
 )
}

export default Home
