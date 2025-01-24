import React from 'react'
import { Link } from 'react-router'

interface Props {
  text?: string
  link?: string
}

const LinkSmallText: React.FC<Props> = ({ text, link }) => {
  return (
    <Link to={`${link}`} className='mr-4'>
      <span className='smallestText'>{text}</span>
    </Link>
  )
}

export default LinkSmallText
