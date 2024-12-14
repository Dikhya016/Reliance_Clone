import React from 'react'
function Banner({image}) {
  return (
      <div>
          <img className='w-[100%]' src={image} alt="" />
    </div>
  )
}

export default Banner