import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useSelector} from "react-redux";
import Login from "./Component/Login";
import Layout from "./Component/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./Component/LandingPage";
import VenueManagement from "./Component/VenueManagement.jsx";
import UserManagement from "./Component/UserManagement.jsx";
import Signup from "./Component/Signup.jsx";

function App() {
    const {user} = useSelector((state) => state.auth);

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route element={<Layout/>}>
                        <Route path="dashboard" element={<HomePage/>}/>
                        {user && user.role === "superadmin" && (
                            <>
                                <Route path="venues" element={<VenueManagement/>}/>
                                <Route path="all-users" element={<UserManagement/>}/>
                            </>
                        )}
                        {/* Login page */}
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<Signup/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
