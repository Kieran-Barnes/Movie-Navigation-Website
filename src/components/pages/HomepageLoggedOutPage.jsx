import HomepageTemplate from "../common/HomepageTemplate";

export default function HomepageLoggedOutPage() {
    return (
        <>
            <HomepageTemplate ifLoggedInAccDisplay={"Login / Signup"} linkPath={'/login'}/>
        </>
    )
}