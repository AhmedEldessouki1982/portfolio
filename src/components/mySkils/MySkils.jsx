import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery.jsx';
import skills from '../../assets/skills.png';
import LineGradient from '../lineGradient/LineGradient';

export default function MySkils() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");
  return (
    <section className = 'pt-10 pb-24 mx-auto md:w-10/12'>
        {/*header and img section*/}
        <div className='order-2 md:flex justify-between items-center'>
            <p className='uppercase font-playfair font-semibold text-xl md:text-4xl mb-5 ml-5'>
                My <p className ='inline text-red'>skills</p>
                <LineGradient width={"w-40"} />
                <p className='px-5 text-justify font-playfair font-semibold text-base normal-case md:w-[34rem] mt-5'>
                Commissioning Manager to support, define and organize the start-up, testing and commissioning activities,able to make the commissioning process standardized as much as possible through formalized procedures and documentation.
                </p>
            </p>
            
            {/*img section*/}
            <div className='m-10 md:m-1'>
            {
                !isSmallScreen?
                (
                    <div>
                        <img src= {skills} alt="skills" />                        
                    </div>
                    ):
                (
                    <img src={skills} alt="skills" />
                    )
            }
            </div>
        </div>

        {/*details of skills */}
        <div className='md:flex md:gap-56'>
            <div>
                <div className='relative inline-block w-48 h-28 mt-10 text-4xl before:contents before:z-[-1] before:absolute before:w-full before:h-full before:bg-blue before:top-0 before:left-20'>
                    <span className='block'>01</span>
                    <span>Experiance</span>
                </div>
                <div className='w-56 h-28 pt-2'>
                    18 Years of Experiance, working on commissioning, start-up & opration of power plants.
                </div>
            </div>

            <div>
                <div className='relative inline-block w-48 h-28 mt-10 text-4xl before:contents before:z-[-1] before:absolute before:w-full before:h-full before:bg-red before:top-0 before:left-20'>
                    <span className='block'>02</span>
                    <span>Technical</span>
                </div>
                <div className='w-80 h-28 pt-2'>
                    Instrumentation and DCS engineer based, highly experiance in process.
                </div>
            </div>

            <div>
                <div className='relative inline-block w-48 h-28 mt-10 text-4xl before:contents before:z-[-1] before:absolute before:w-full before:h-full before:bg-yellow before:top-0 before:left-20'>
                    <span className='block'>03</span>
                    <span>Management</span>
                </div>
                <div className='w-80 h-28 pt-2'>
                    Contribute views on designs, constructions, proposals during management meetings. Tracks multiple work task schedules, provides schedule progression updates and proactively identifies schedule constraints.
                </div>
            </div>
        </div>

    </section>
  )
}