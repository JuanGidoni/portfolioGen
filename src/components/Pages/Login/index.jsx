import { useAppContext } from "../../Contexts/AppContext"

const Login = () => {

 const { isAuth, signInWithGoogle, userData } = useAppContext()
 return (

  isAuth ? <div>
   Bienvenido, {userData.displayName} 
  </div> : 
  <div>
   You're not logged in. Please <button onClick={() => signInWithGoogle()}>Login</button>
  </div>
 )
}

export default Login
