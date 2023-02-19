import React from 'react';
import Landing from './components/Landing/Landing';
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
    </div>
  );
}


