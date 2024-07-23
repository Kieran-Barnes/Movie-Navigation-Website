// import external utilities 
import { Link } from "react-router-dom"

// import components
import HomepageTemplate from "../common/HomepageTemplate"

export default function HomepageLoggedInPage() {
    return (
        <>
            <HomepageTemplate ifLoggedInAccDisplay={"Your Account"} linkPath={'/your-account'}/>
            <Link to="/logout"><button>Log out</button></Link> 
        </>
    )
}