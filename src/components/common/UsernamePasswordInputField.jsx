export default function UsernamePasswordInputField({ inputType, labelName, tagPrefix, inputValue, onChangeFunc }) {
    return (
        <>
            <div>
                <label htmlFor={`${tagPrefix}-input-field`}>{labelName}</label>
                <input 
                    type={inputType} 
                    value={inputValue} 
                    onChange={onChangeFunc} 
                    name={`${tagPrefix}-input-field`} 
                    id={`${tagPrefix}-input-field`}
                />
            </div>
        </>
    )
}