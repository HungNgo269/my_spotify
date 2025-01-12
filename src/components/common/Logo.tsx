import React from 'react'
import logo from '../../assets/images/spotify-logo.svg'
import { Link } from 'react-router'
interface Props {
  height?: string
  width?: string
}

const Logo: React.FC<Props> = ({ height, width }) => {
  return (
    <Link to={'/'}>
      <img src={logo} style={{ height: height, width: width }} alt='logospotify' />
    </Link>
  )
}

export default Logo
