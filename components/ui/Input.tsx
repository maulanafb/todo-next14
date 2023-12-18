import React from 'react'
interface IProps {
    name: string
    type: string 
    placeholder?: string
    value?:string
}
const Input = ({name,type,placeholder,value}:IProps) => {
  return (
      <input  className='w-full p-2 border-gray-200 border' name={name} type={type} value={value} placeholder={placeholder} />
  )
}

export default Input