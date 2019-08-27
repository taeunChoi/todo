import React from 'react'

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div>
            <input {...{value, onChange, onKeyPress}} />
            <div onClick={onCreate}>
                추가
            </div>
        </div>
    )
}
export default Form