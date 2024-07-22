export default function UsernamePasswordInputField({ inputType, labelName, tagPrefix }) {
    return (
        <>
            <div>
                <label htmlFor={`${tagPrefix}-input-field`}>{labelName}</label>
                <input type={inputType} name={`${tagPrefix}-input-field`} id={`${tagPrefix}-input-field`}/>
            </div>
        </>
    )
}