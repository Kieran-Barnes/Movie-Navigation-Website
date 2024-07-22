import HomepageTemplate from "../common/HomepageTemplate"

export default function HomepageLoggedInPage() {
    return (
        <>
            <HomepageTemplate ifLoggedInAccDisplay={"Your Account"} />
        </>
    )
}