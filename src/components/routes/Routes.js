import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
} from "react-router-dom";

import Login from '../login-form/login'
import Dashboard from '../dashboard/Dashboard';


const RequireAuth = ({ children }) => {
    const token = localStorage.getItem('userToken');
    let location = useLocation();

    if (!token) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}


const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>}
                />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;