import React, {
    useContext,
    useState,
    useEffect,
    createContext
} from "react"
import Loader from '../Atoms/Loader'
import {
    auth,
    googleProvider
} from "./FireBase"
import {
    useHistory
} from 'react-router-dom'

import {
    config
} from '../Configuration/config'

const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext)
}

export function AppProvider({
    children,
    ...props
}) {

    // declare constants for globals states

    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState({})
    const [theme, setTheme] = useState("dark")
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState(null)
    const history = useHistory()

    const toggleTheme = (theme) => {
        setTheme(theme)
    }

    const signInWithGoogle = async () => {
        try {
            setLoading(true)
            await auth.signInWithPopup(googleProvider).then(res => {
                localStorage.setItem('user', JSON.stringify(res.user))
                setUserData({
                    displayName: res.user.displayName,
                    photoURL: res.user.photoURL,
                    email: res.user.email,
                    uid: res.user.uid,
                    refreshToken: res.user.refreshToken
                })
                setIsAuth(true)
            })
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false)
                    history.push("/")
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        try {
            setLoading(true)
            await auth.signOut().then(() => {
                setIsAuth(false)
                setUserData(null)
                localStorage.removeItem('user')
            })
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false)
                    history.push("/")
                })
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect once to get the data then unsuscribe it
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUserData(JSON.parse(localStorage.getItem('user')))
            setIsAuth(true)
        } else {
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
            {loading ? <div className="loader-content"><Loader/></div> : children}
        </AppContext.Provider>
    )
}