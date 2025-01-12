// src/components/ComponentName.tsx
import React from 'react'
import classNames from 'classnames'

interface Props {
  text?: string
  textSize?: string
  size?: string
  background?: 'black' | 'green'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const ButtonHover: React.FC<Props> = ({ text, textSize, size, onClick, background, disabled = false }) => {
  const bgClasses = {
    white: 'bg-white text-black',
    black: 'bg-transparent	 text-white',
    green: 'bg-green-500 text-white'
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames('button_hover', bgClasses[background || 'white'])}
      aria-label={text}
    >
      <span className={`${textSize}`} style={{ minBlockSize: size }}>
        {text}
      </span>
    </button>
  )
}

export default ButtonHover
