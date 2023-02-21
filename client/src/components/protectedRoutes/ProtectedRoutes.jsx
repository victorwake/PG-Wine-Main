
import { Navigate, Outlet } from 'react-router-dom'

export const  ProtectedRoutes = ({admin, children, redirecTo="/home"}) => {

    if( admin === false ){
        return <Navigate to={redirecTo} />
    } 
        return <Outlet />
    
}