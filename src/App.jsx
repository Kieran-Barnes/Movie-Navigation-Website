import { useState } from "react"
import HomepageLoggedOutPage from "./components/pages/HomepageLoggedOutPage"
import { Route, Routes } from "react-router-dom"
import HomepageLoggedInPage from "./components/pages/HomepageLoggedInPage"

export default function App() {
  const [state, setState] = useState(true)
  return (
    <>
      {state ? (
          <Routes>
            <Route path="/" element={<HomepageLoggedOutPage />} />
          </Routes> 
        ) : (
          <Routes>
            <Route path="/" element={<HomepageLoggedInPage />} />
          </Routes>
        )
      }
      
    </>
  )
}

