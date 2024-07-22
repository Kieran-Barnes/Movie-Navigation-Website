// import external utilities
import { Route, Routes } from "react-router-dom"

// import components
import HomepageLoggedOutPage from "../components/pages/HomepageLoggedOutPage"
import LoginPage from "../components/pages/LoginPage"
import SignupPage from "../components/pages/SignupPage"

export default function LoggedOutRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageLoggedOutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    )
}