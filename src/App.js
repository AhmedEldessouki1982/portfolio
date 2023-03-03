import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import LineGradient from './components/lineGradient/LineGradient';
import MySkils from './components/mySkils/MySkils';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  let [selectedPage, setSelectedPage] = React.useState("Home");
  let [pageTop, setPageTop] = React.useState(true);

  React.useEffect(
   ()=> {
    selectedPage === "Home" && window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    let handleScroll = () => {
      window.scrollY === 0 ? setPageTop(true) : setPageTop(false)
    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   },[]
  )
 
  return (
    <BrowserRouter>
      <div className="app bg-deep-blue">
        <NavBar 
          selectedPage = {selectedPage}
          setSelectedPage = {setSelectedPage}
          pagePosition = {pageTop}
        />
        <Landing />
        <LineGradient />
        <div>
          <MySkils />
        </div>

      </div>
    </BrowserRouter>
  );
}


