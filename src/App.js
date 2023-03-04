import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import LineGradient from './components/lineGradient/LineGradient';
import MySkils from './components/mySkils/MySkils';
import NavBar from './components/NavBar/NavBar';
import Project from './components/Projects/Project';

export default function App() {
  let [selectedPage, setSelectedPage] = React.useState("Home");
  let [pageTop, setPageTop] = React.useState(true);

  React.useEffect(
   ()=> {
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
        <LineGradient />
        <div>
          <Project />
        </div>
      </div>
    </BrowserRouter>
  );
}


