import { useAppContext } from '../../Contexts/AppContext'
import { Redirect } from 'react-router-dom'

const Login = () => {
 const { signInWithGoogle, isAuth } = useAppContext()
 return (
  !isAuth ? <div>
   Please, <button onClick={() => signInWithGoogle()}>Login</button>
  </div> :
   <Redirect to="/panel" />
 )
}

export default Login
