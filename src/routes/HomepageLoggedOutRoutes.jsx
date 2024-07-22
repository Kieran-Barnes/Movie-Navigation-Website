// import external utilities
import { Route, Routes } from "react-router-dom"

// import components
import HomepageLoggedOutPage from "../components/pages/HomepageLoggedOutPage"

export default function HomepageLoggedOutRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomepageLoggedOutPage />} />
            </Routes>
        </>
    )
}