import ButtonHover from '../../../components/common/ButtonHover'

const LoginRegister = () => {
  const handleButtonClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className='flex flex-row justify-center items-center'>
      <ButtonHover size='48px' text='Đăng ký' background='black' onClick={handleButtonClick} />
      <ButtonHover size='48px' text='Đăng nhập' onClick={handleButtonClick} />
    </div>
  )
}

export default LoginRegister
