import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery.jsx';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu from '../../assets/menu-icon.svg';
import close from '../../assets/close-icon.svg';

export default function NavBar({selectedPage, setSelectedPage}) {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");
  let [mobileMenuOpen, setMobileMenueOpen] = React.useState(false);
  let menuItems = ["Home", "Skills", "Projects", "Testimonials", "Contacts"];
  return (
    <nav className="flex flex-row justify-between flex-start px-10 my-5">
      <h4 className="px-6 font-playfair text-3xl">
        ae
      </h4>

      {
        /*desktop screen navbar */
        !isSmallScreen?
        <div className="flex justify-between w-auto mx-10 self-center font-sans">
          {
            menuItems.map(
              (item,i) => (
                <li key = {i} className='cursor-pointer list-none mx-7'>{item}</li>
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
                <div className='absolute w-8/12 h-full bg-blue right-0 top-0 text-black text-left p-20'>
                  {
                    menuItems.map(
                          (item,i) => (
                            <li key = {i} className='my-5 text-2xl cursor-pointer list-none'>{item}</li>
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