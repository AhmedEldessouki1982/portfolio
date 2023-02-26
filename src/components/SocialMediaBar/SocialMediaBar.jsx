import React from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';

export default function SocialMediaBar() {
  return (
    <div className='flex gap-20 w-full justify-center overflow-hidden mt-5 mb-10 group'>
        <div className='relative translate-x-1/2 transition ease-linear delay-300 text-xl font-sans after:contents after:opacity-0 after:absolute after:w-14 after:h-[1.5px] after:bg-white after:top-2/4 after:ml-1 group-hover:translate-x-0 group-hover:after:opacity-100'>
            <span>Follow/Contact me</span>
        </div>
        <nav className='flex list-none gap-5'>
            <li className='cursor-pointer hover:opacity-50 -translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={facebook} alt="facebook" />
            </li>
            <li className='cursor-pointer hover:opacity-50 translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={instagram} alt="instagram" />
            </li>
            <li className='cursor-pointer hover:opacity-50 -translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={linkedin} alt="linkedin" />
            </li>
            <li className='cursor-pointer hover:opacity-50 translate-y-9 transition ease-linear delay-300 group-hover:translate-y-0'>
                <img src={twitter} alt="twitter" />
            </li>
        </nav>
    </div>
  )
}