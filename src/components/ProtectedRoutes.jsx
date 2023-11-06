import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export function ProtectedRoutes ({ children }) {

    const {isAuthenticated} = useAuth()
    
    if(!isAuthenticated) return <Navigate to={'/login'} state={{err:'Usuario no autorizado '}} />

    return children


}


function useAuth(){

    const isAuthenticated= true
    return {isAuthenticated}
}