import React from 'react'

const Input = ({name, type, placeholder}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
  )
}

export default Input