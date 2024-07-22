import HomepageLoggedOut from "./components/pages/HomepageLoggedOutPage"
import { Route, Routes } from "react-router-dom"

export default function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<HomepageLoggedOut />}/>
      </Routes>
    </>
  )
}

