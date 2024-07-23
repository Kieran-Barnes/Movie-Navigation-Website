export default function UsernamePasswordInputField({ inputType, labelName, tagPrefix, inputValue, onChangeFunc }) {
    return (
        <>
            <div>
                <label htmlFor={`${tagPrefix}-input-field`}>{labelName}</label>
                <input 
                    type={inputType} 
                    value={inputValue} 
                    onChange={e => onChangeFunc(e.target.value)} 
                    name={`${tagPrefix}-input-field`} 
                    id={`${tagPrefix}-input-field`}
                />
            </div>
        </>
    )
}