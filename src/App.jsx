import HomepageLoggedOutPage from "./components/pages/HomepageLoggedOutPage"
import { Route, Routes } from "react-router-dom"
import HomepageLoggedInPage from "./components/pages/HomepageLoggedInPage"
import { UserContext } from "./context/UserContext"
import { useContext } from "react"

export default function App() {
  const { userLoggedIn } = useContext(UserContext)
  return (
    <>
      {userLoggedIn ? (
          <Routes>
            <Route path="/" element={<HomepageLoggedInPage />} />
          </Routes> 
        ) : (
          <Routes>
            <Route path="/" element={<HomepageLoggedOutPage />} />
          </Routes>
        )
      }
      
    </>
  )
}

