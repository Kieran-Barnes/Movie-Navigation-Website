import HomepageTemplate from "../common/HomepageTemplate"

export default function HomepageLoggedInPage() {
    return (
        <>
            <HomepageTemplate ifLoggedInAccDisplay={"Your Account"} linkPath={'/'}/>  
            { /* use linkPath as '/' for now until your account page is implemented */}
        </>
    )
}