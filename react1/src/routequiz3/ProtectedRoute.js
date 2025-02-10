import { Navigate } from "react-router-dom";
import {useAuth} from './AuthContext';

function ProtectedRoute({children}) {
    const { isLoggedIn} = useAuth(); // custom Hook(authContext파일)

    if(!isLoggedIn){
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default ProtectedRoute;