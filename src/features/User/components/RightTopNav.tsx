import ButtonHover from '../../../components/common/ButtonHover'
import authSlice from '../authSlice'
const RightTopNav = () => {
  const handleButtonClick = () => {
    alert('Button clicked!')
  }
  const handleLoginWithSpotify = () => {
    // Server sẽ lo phần OAuth, user đăng nhập -> callback -> token
    window.location.href = 'http://localhost:5000/login'
  }
  return (
    <div className='flex flex-row justify-center items-center'>
      <ButtonHover size='48px' text='Đăng ký' background='black' onClick={handleButtonClick} />
      <ButtonHover size='48px' text='Đăng nhập' onClick={handleLoginWithSpotify} />
    </div>
  )
}

export default RightTopNav
