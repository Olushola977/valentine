import React from 'react'

const Input = ({type, id, placeholder, value, onChange, width}) => {
  return (
    <input 
        type={type} 
        id={id} 
        placeholder={placeholder}
        className={`block border-0 outline-0 rounded-sm my-2 p-3 ${width ? width : 'w-full lg:w-2/3'}`} 
    />
  )
}

export default Input