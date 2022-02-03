import React from 'react'
import './Button.css'

const ButtonComponent = ({ handleBtnClick, name }) => {
  return (

    <button className='toggles' onClick={handleBtnClick}>
      <span className='cta'>
        <span>{name}</span>
        <svg width='13px' height='10px' viewBox='0 0 13 10'>
          <path d='M1,5 L11,5' />
          <polyline points='8 1 12 5 8 9' />
        </svg>
      </span>
    </button>

  )
}

export default ButtonComponent
