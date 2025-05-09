import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-medium text-[18px] tect-primary outline-none ${styles}`}>Get Started</button>
  )
}

export default Button