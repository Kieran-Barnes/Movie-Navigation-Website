function StylingPreferencesPage() {
    return (
        <>
            <h1>Styling Preferences</h1>
            <div>
                <div>
                    <label htmlFor="colour-scheme-input-field">Choose Website Colour Scheme</label>
                    <select id="colour-scheme-input-field">
                        <option value='black-background-white-text'>black-background-white-text</option>
                        <option value='white-background-black-text'>white-background-black-text</option>
                    </select>
                    <button>Save Changes</button>
                </div>
            </div>
        </>
    )
}

export default StylingPreferencesPage