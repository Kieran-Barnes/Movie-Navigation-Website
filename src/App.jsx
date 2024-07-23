// import route components
import LoggedInRoutes from "./routes/LoggedInRoutes"
import LoggedOutRoutes from "./routes/LoggedOutRoutes"

// import context 
import { UserContext } from "./context/UserContext"

// import external utilities
import { useContext } from "react"

export default function App() {
  const { userLoggedIn } = useContext(UserContext)
  return (
    <>
      {userLoggedIn ? (
          <LoggedInRoutes />
        ) : (
          <LoggedOutRoutes />
        )
      }
      
    </>
  )
}

