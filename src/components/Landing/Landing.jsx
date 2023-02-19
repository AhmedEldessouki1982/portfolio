import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery.jsx';
import profile from '../../assets/profile.png';
import Animatedname from '../AnimatedName/Animatedname.jsx';

export default function Landing() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    <section className='md:flex justify-center md:justify-between md:gap-16 md:mx-10 md:my-20'>
      {
        !isSmallScreen? 
        (
          <div className ='order-2 mt-10 md:mr-60 w-80 h-96 m-auto'>     
          {/*profile pic section desktop*/}    
            <div className='flex relative w-full h-full before:absolute before:-z[-1] before:w-full before:h-full before:border-2 
            before:border-blue-200 z-0 before:right-10 before:bottom-10 before:rounded-t-[500px] before:max-w-[400px]
            md:before:max-w-[600px]'>
              <img className='absolute z-10 rounded-t-[500px] hover:filter hover:saturate-200 transition duration-500' 
              src={profile} alt="profile"/>
            </div>
          </div> 
        )
        :
        (
          <div className='flex justify-center order-2'>
            <img className='w-80 rounded-t-[500px] hover:filter hover:saturate-200 transition duration-500 
            md:before:max-w-[320px]' src={profile} alt="profile" />
          </div>)
        }

        {/*text & name section*/} 
          <div className='m-20'>
           <Animatedname />
          </div>
    </section>
  )
}
