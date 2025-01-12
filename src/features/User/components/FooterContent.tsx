import React from 'react'

interface Props {
  propName?: string
}

const FooterContent: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>FooterForContent</h1>
    </div>
  )
}

export default FooterContent
