import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Login from "../login-form/login";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const RequireAuth = ({ children }) => {
  let location = useLocation();
  let token = localStorage.getItem("userToken");

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
    }
    return children;
};

export default Routers;
