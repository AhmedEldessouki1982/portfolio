import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery.jsx';
import { HashLink as Link } from 'react-router-hash-link';
import menu from '../../assets/menu-icon.svg';
import close from '../../assets/close-icon.svg';

export default function NavBar({selectedPage, setSelectedPage, pagePosition}) {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");
  let [mobileMenuOpen, setMobileMenueOpen] = React.useState(false);
  let menuItems = ["Home", "Skills", "Projects", "Testimonials", "Contacts"];
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <nav className= {`${pagePosition? "" : "bg-red"} md:fixed md:top-0 md:w-full md:h-12 flex flex-row justify-between flex-start px-10 my-1 z-40`}>
      <h4 onClick={() => scrollToTop()} className="px-6 py-1 font-playfair text-3xl cursor-pointer">
        ae
      </h4>

      {
        /*desktop screen navbar */
        !isSmallScreen?
        <div className="flex justify-between w-auto mx-10 self-center font-sans">
          {
            menuItems.map(
              (item,i) => (
                <Link onClick={() => setSelectedPage(item)} smooth to={`#${item}`} key={i} className='cursor-pointer mx-7'>{item}</Link>
              )
            )
          }
        </div>
        /*Mobile screen Navbar */
        :
          <div>
            <div className='my-2'>
              { 
                !mobileMenuOpen?
                <button className= "w-9 h-9 rounded-full pl-1.5 bg-red" onClick={() => setMobileMenueOpen(!mobileMenuOpen)}>
                  <img src={menu} alt="menu" />
                </button>
                :
                <button className='absolute z-10 text-black' onClick={() => setMobileMenueOpen(!mobileMenuOpen)}>
                  <img src={close} alt="close" />
                </button>
              
              }
            </div>
              { 
                mobileMenuOpen &&
                <div className='flex flex-col absolute w-8/12 h-full bg-blue right-0 top-0 text-black text-left p-20'>
                  {
                    menuItems.map(
                          (item,i) => (
                            <Link smooth to={`#${item}`} key={i} className='my-5 text-2xl cursor-pointer'>{item}</Link>
                          )
                        )
                  }     
                </div>
              }
          </div>
      }
    </nav>
  )
}