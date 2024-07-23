// import external utilities
import { Route, Routes } from "react-router-dom"

// import components
import HomepageLoggedInPage from "../components/pages/HomepageLoggedInPage"
import YourAccountPage from "../components/pages/YourAccountPage"
import LogoutConfirmationPage from "../components/pages/LogoutConfirmationPage"

export default function LoggedInRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageLoggedInPage />} />
                <Route path="/your-account" element={<YourAccountPage />} />
                <Route path="/logout" element={<LogoutConfirmationPage />} />
            </Routes> 
        </>
    )
}