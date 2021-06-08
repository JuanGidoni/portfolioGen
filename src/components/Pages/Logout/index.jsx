import { useAppContext } from "../../Contexts/AppContext"

const Logout = () => {
 const { logout } = useAppContext()
 return (
  <div>
   Thanks for use my portfolio, you can <button onClick={() => logout()}>logout here.</button>
  </div>
 )
}

export default Logout
