import { Route, Redirect } from "react-router-dom"
import { useAppContext } from "../Contexts/AppContext"

export default function PrivateRoutes({ component: Component, ...rest }) {
  const { isAuth } = useAppContext()

  return (
    <Route
      {...rest}
      render={props => {
        return isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
