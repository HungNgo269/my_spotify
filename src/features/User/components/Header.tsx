import '../assets/css/index.css'

import SearchBar from '../../../components/common/SearchBar'
import LoginRegister from './LoginRegister'
import Logo from '../../../components/common/Logo'
const Header = () => {
  return (
    <>
      <Logo height='32px' width='32px'></Logo>
      <SearchBar></SearchBar>
      <LoginRegister></LoginRegister>
    </>
  )
}

export default Header
