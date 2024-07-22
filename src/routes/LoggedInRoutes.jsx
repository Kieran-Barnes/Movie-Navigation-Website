// import external utilities
import { Route, Routes } from "react-router-dom"

// import components
import HomepageLoggedInPage from "../components/pages/HomepageLoggedInPage"

export default function LoggedInRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageLoggedInPage />} />
            </Routes> 
        </>
    )
}