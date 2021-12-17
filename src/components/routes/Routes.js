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
import SignUp from '../Sign-up/SignUp';


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
                <Route path='/a' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
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