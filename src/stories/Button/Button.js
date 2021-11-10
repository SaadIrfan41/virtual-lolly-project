import React from 'react'
import './Button.css'
const Button = (props) => {
  const { size = 'medium', children, ...rest } = props
  return (
    <button className={`button ${size}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
