import React from 'react';
import TimeLine from '../TimeLine/TimeLine.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.jsx';
import LineGradient from '../lineGradient/LineGradient';
import manager from '../../assets/manager.svg';
import engineer from '../../assets/engineer.svg';

let jobTitle = "Commissioning manager";
let location = "Dubai /Aweer simple cycle phase 04"
let jobDescription = "To be responsible for directing and allocating appropriate resources to ensure all aspects of commissioning activity w i.e. brokerage, payments and contracting, perform and manage the integration and change processes of commissioning functions across People services areas."

export default function Project() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    <section id='Projects' className = 'relative pt-10 pb-24 ml-1 md:mx-auto md:w-10/12'>
        {/*header and img section*/}
        <div className='order-2 md:flex justify-between items-center'>
            <span className='uppercase font-playfair font-semibold text-xl md:text-4xl mb-5 ml-5'>
                My <p className ='inline text-red'>Projects</p>
                <LineGradient width={"w-48"} />
            </span>
        </div>
        <div className='mt-10'>
          <TimeLine projectLocation = {location} jobDescription={jobDescription} jobTitle = {jobTitle} icon = {manager} cardDirection = {`${isSmallScreen? "right":"left"}`}/>
          <TimeLine projectLocation = {location} jobDescription={jobDescription} jobTitle = {jobTitle} icon = {engineer} cardDirection = {"right"}/>
          <TimeLine projectLocation = {location} jobDescription={jobDescription} jobTitle = {jobTitle} icon = {engineer} cardDirection = {`${isSmallScreen? "right":"left"}`}/>
          <TimeLine projectLocation = {location} jobDescription={jobDescription} jobTitle = {jobTitle} icon = {engineer} cardDirection = {"right"}/>
        </div>

    </section>
  )
}

