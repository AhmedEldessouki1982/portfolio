import React from 'react';
import location from '../../assets/location.svg';

export default function TimeLine( {cardDirection, icon, jobTitle, jobDescription, projectLocation} ) {
  return (
    <div className='relative flex justify-center w-full'>
      <div className='w-1 h-72 bg-white'></div>

      <div className={`flex ${cardDirection === "right"? "flex-row-reverse translate-x-[21%]" : "translate-x-[-21%]"} absolute  gap-5`}>
        <div className='w-96 h-48 bg-slate-300 rounded '>
          <h4 className='ml-1 text-gray-600 capitalize text-xl'> {jobTitle}</h4>
          <p className='m-1 text-black'>{jobDescription}</p>
          <div className='flex w-full mt-5'>
            <img className='w-10 inline-block' src={location} alt="location" />
            <p className='w-full inline-block'>{projectLocation}</p>
          </div>
        </div>
        
        <div className='mt-5 w-16 h-16 rounded-full bg-slate-100'>
          <img className='w-14 mx-auto' src={icon} alt="role" /> 
          
        </div>
        <span className='block w-32'>01 March 2023
        
        </span>
      </div>
    </div>
  )
}