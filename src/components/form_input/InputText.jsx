import React from 'react'

function InputText() {
  return (
    <div className='group'>
        <input required type='text' className='input' />
        <span className='highlight'></span>
        <span className='bar'></span>
        <label className='label-input'>Name</label>
    </div>
  )
}

export default InputText