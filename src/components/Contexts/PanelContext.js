import React, {
    useContext,
    useState,
    useEffect,
    createContext
} from "react"
import Loader from '../Atoms/Loader'
import { getFirestore } from './FireBase'

const PanelContext = createContext()

export function usePanelContext() {
    return useContext(PanelContext)
}

export function PanelProvider({
    children,
    ...props
}) {

    // declare constants for globals states

    const [loading, setLoading] = useState(true)
    const [deleteLoader, setDeleteLoader] = useState(false)
    const [posts, setPosts] = useState([])

    // useEffect once to get the data then unsuscribe it
    const db = getFirestore

    const getPosts = () => {
      const categoryCollection = db.collection("posts")
      categoryCollection.get().then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log('Post not found or empty...')
        } else {
          setPosts(querySnapshot.docs.map(doc => ({
            id: doc.id,
            item: doc.data()
          })))
        }
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        setLoading(false)
      })
    }
    useEffect(() => {
      getPosts()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // this constant will be sended to the Provider to be used in all the components with the functions/values
    const value = {
        posts,
        loading,
        deleteLoader,
        setLoading,
        setDeleteLoader,
        setPosts,
    }

    return (
        <PanelContext.Provider value={value} props={props}>
            {loading ? <div className="loader-content"><Loader /></div> : children}
        </PanelContext.Provider>
    )
}