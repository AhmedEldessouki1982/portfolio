import React from 'react';
import Landing from './components/Landing/Landing';
import LineGradient from './components/lineGradient/LineGradient';
import MySkils from './components/mySkils/MySkils';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  let [selectedPage, setSelectedPage] = React.useState("home")
  return (
    <div className="app bg-deep-blue">
      <NavBar 
      selectedPage = {selectedPage}
      setSelectedPage = {setSelectedPage}
      />

      <Landing />

      <LineGradient />

      <div>
        <MySkils />
      </div>
      
    </div>
  );
}


