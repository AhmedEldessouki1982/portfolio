import React from 'react';

export default function Animatedname() {
  return (
    <div className='relative h-40 flex flex-col content-center items-center justify-between overflow-hidden'>
        {/*upper name value */}
        <div className='text-6xl'>
            <span>ahmed</span>
        </div>
        {/*animated text */}
        <div className='list-none flex flex-col items-center text-2xl gap-20 overflow-hidden'>
          <li className='bg-red animate-fadein mt-1 px-4 rounded'>commissioning manager</li>
          <li className='bg-blue px-4 rounded'> (PMP)®certificate</li>
          <li className='bg-yellow px-4 rounded'>gas turbine engineer</li>
        </div>
        {/*lower name value*/}
        <div className='text-6xl'>
            <span>eldessouki</span>
        </div>
    </div>
  )
}

