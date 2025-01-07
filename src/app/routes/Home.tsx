import React from 'react'

interface Props {
  propName?: string
}

const ComponentName: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>{propName}</h1>
      <h2>Home</h2>
    </div>
  )
}

export default ComponentName
