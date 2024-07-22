// import route components
import HomepageLoggedInRoutes from "./routes/HomepageLoggedInRoutes"
import HomepageLoggedOutRoutes from "./routes/HomepageLoggedOutRoutes"

// import context 
import { UserContext } from "./context/UserContext"

// import external utilities
import { useContext } from "react"

export default function App() {
  const { userLoggedIn } = useContext(UserContext)
  return (
    <>
      {userLoggedIn ? (
          <HomepageLoggedInRoutes />
        ) : (
          <HomepageLoggedOutRoutes />
        )
      }
      
    </>
  )
}

