// import external utilities
import { Route, Routes } from "react-router-dom"

// import components
import HomepageLoggedOutPage from "../components/pages/HomepageLoggedOutPage"

export default function LoggedOutRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageLoggedOutPage />} />
            </Routes>
        </>
    )
}