import React from 'react'

const TextArea = ({id, placeholder, value, onChange}) => {
  return (
    <textarea 
        id={id} 
        placeholder={placeholder}
        className="block border-0 outline-0 rounded-sm my-3 p-3 resize-none h-40 w-full" 
    />
  )
}

export default TextArea