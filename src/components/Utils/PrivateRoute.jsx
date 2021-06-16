import { Route, Redirect } from "react-router-dom"
import { useAppContext } from "../Contexts/AppContext"

export default function PrivateRoutes({ component: Component, ...rest }) {
  const { isAuth, config, userData } = useAppContext()

  return (
    <Route
      {...rest}
      render={props => {
        return isAuth ? <Component {...props} config={config} user={userData} isAuth={isAuth} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
