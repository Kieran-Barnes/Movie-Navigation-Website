import BackToHomeButton from "../common/BackToHomeButton";

export default function YourAccountPage() {
    return (
        <>
            <h1>{`Hello, user`}</h1>
            {/* 'user' in the template literal will be replaced by dynamically determined username */}
            <BackToHomeButton />
            <section>
                <ul>
                    <li>Username: username</li>
                    <li>Date Of Birth: --/--/--</li>
                    <li>Account Created: 23rd July 2024</li>
                    {/* Add more when logic for the user is implemented */}
                </ul>
            </section>
            <button>Change Account Info</button>
            <button>Delete Account</button>
        </>
    )
}