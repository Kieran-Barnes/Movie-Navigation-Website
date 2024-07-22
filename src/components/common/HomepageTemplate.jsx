export default function HomepageTemplate({ ifLoggedInAccDisplay }) {
    return (
        <>
            <h1>Movie Navigator Website</h1>
            <button>Search</button>
            <button>Your Saved</button>
            <button>{ifLoggedInAccDisplay}</button>
            <button>Styling Preferences</button>
        </>
    )
}