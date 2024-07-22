import { Link } from "react-router-dom"

export default function HomepageTemplate({ ifLoggedInAccDisplay, linkPath }) {
    return (
        <>
            <h1>Movie Navigator Website</h1>
            <button>Search</button>
            <button>Your Saved</button>
            <Link to={`${linkPath}`}><button>{ifLoggedInAccDisplay}</button></Link>
            <button>Styling Preferences</button>
        </>
    )
}