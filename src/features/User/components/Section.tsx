import React from 'react'
import ButtonHover from '../../../components/common/ButtonHover'

interface Props {
  mainText?: string
  subText?: string
  buttonName?: string
  size?: string
}

const Section: React.FC<Props> = ({ mainText, subText, buttonName, size }) => {
  const handleButtonClick = () => {
    alert('Button clicked!')
  }
  return (
    <div className='flex flex-col items-start justify-center gap-5 px-5 py-4 my33333333333333333333333333333-2'>
      <div className='flex flex-col justify-between gap-2'>
        <span className='text'>{mainText}</span>
        <span className='smallText'>{subText}</span>
      </div>
      <ButtonHover size={size} textSize='smallText' text={buttonName} onClick={handleButtonClick} />
    </div>
  )
}

export default Section
