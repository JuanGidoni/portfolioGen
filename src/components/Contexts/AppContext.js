import React, { useContext, useState, useEffect, createContext } from "react"
import Loader from '../Atoms/Loader'
import { auth, googleProvider } from "./FireBase"
import { useHistory } from 'react-router-dom'

import { config } from '../Configuration/config'

const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({ children, ...props }) {

    // declare constants for globals states

    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({})
    const [theme, setTheme] = useState("light")
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState(null)
    const history = useHistory()

    const toggleTheme = (theme) => {
        setTheme(theme)
    }

    const signInWithGoogle = async () => {
        try {
            const res = await auth.signInWithPopup(googleProvider)
            localStorage.setItem('user', JSON.stringify(res.user))
            setUserData(res.user)
            setIsAuth(true)
            history.push("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        try {
            await auth.signOut().then(() => {
                setUserData(null)
                setIsAuth(false)
                localStorage.removeItem('user')
            })
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect once to get the data then unsuscribe it
    useEffect(() => {
        if(localStorage.getItem('user')){
            setUserData(JSON.parse(localStorage.getItem('user')))
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
        setLoading(false)

        return () => {
            setLoading(true)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // this constant will be sended to the Provider to be used in all the components with the functions/values
    const value = {
        isAuth,
        userData,
        loading,
        theme,
        errorMsg,
        setTheme,
        setLoading,
        setErrorMsg,
        toggleTheme,
        setUserData,
        setIsAuth,
        signInWithGoogle,
        logout,
        config
    }

    return (
        <AppContext.Provider value={value} props={props}>
            {loading ? <Loader /> : children}
        </AppContext.Provider>
    )
}

