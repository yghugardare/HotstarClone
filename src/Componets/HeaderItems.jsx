import React from 'react'

function HeaderItems({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-4 mb-4 decoration-2'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItems