import { Link } from "react-router-dom";

export default function LogoutConfirmationPage() {
    return (
        <>
            <h1>Are you sure you want to log out?</h1>
            <button>Yes. Log out</button>
            <Link to="/"><button>No. Take me home</button></Link>
        </>
    )
}