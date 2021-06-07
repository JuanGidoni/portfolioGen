import React, { useContext, useState, useEffect } from "react"
import Loader from '../Atoms/Loader'

const AppContext = React.createContext()

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({ children, ...props }) {

    // declare constants for globals states
    
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState({})
  const [theme, setTheme] = useState("light")


  const toggleTheme = () => {
     theme === 'light' ? setTheme('dark') : setTheme('light')
  }

    // useEffect once to get the data then unsuscribe it
    useEffect(() => {
        setLoading(false)

        return () => {
            setLoading(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    // this constant will be sended to the Provider to be used in all the components with the functions/values
    const value = {
     loading,
     theme,
     setTheme,
     setLoading,
     errorMsg,
     setErrorMsg,
     toggleTheme
    }

    return (
        <AppContext.Provider value={value} props={props}>
            {loading ? <Loader /> : children}
        </AppContext.Provider>
    )
}

