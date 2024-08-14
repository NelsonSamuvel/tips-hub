import React from 'react'

const TagsList = ({tag}) => {
  return (
    <li className='text-xs hover:underline cursor-pointer'>#{tag}</li>
  )
}

export default TagsList