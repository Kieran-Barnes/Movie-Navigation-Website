// import external utilities
import { Link } from "react-router-dom";
import { useContext } from "react";

// import context
import { UserContext } from "../../context/UserContext";

export default function LogoutConfirmationPage() {
    const { logout } = useContext(UserContext)
    return (
        <>
            <h1>Are you sure you want to log out?</h1>
            <button onClick={logout}>Yes. Log out</button>
            <Link to="/"><button>No. Take me home</button></Link>
        </>
    )
}