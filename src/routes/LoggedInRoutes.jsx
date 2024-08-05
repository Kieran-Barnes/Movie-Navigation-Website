// import external utilities
import { Route, Routes } from "react-router-dom"

// import components
import HomepageLoggedInPage from "../components/pages/HomepageLoggedInPage"
import YourAccountPage from "../components/pages/YourAccountPage"
import LogoutConfirmationPage from "../components/pages/LogoutConfirmationPage"
import StylingPreferencesPage from "../components/pages/StylingPreferencesPage"

export default function LoggedInRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageLoggedInPage />} />
                <Route path="/your-account" element={<YourAccountPage />} />
                <Route path="/logout" element={<LogoutConfirmationPage />} />
                <Route path="/styling-preferences" element={<StylingPreferencesPage />}/>
            </Routes> 
        </>
    )
}