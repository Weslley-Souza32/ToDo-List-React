import React from 'react'
import './button.css'
const Button = ({id, text}) => {
  return (
    <button className='btn' id={id}>{text}</button>
  )
}

export default Button