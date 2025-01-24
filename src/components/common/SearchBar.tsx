import React from 'react'

interface Props {
  propName?: string
}

const ComponentName: React.FC<Props> = ({ propName }) => {
  return (
    <div>
      <h1>SearchBar</h1>
    </div>
  )
}

export default ComponentName
