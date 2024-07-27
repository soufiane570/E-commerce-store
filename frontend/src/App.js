import React from 'react';
// import NavBar from './components/nav';
import Navmantenence from './components/navmantenenc';
// import Homepage from './components/HomePage';
// import Section from './components/section';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './pages/HomeComponent'

function App() {
  return (
   <div>
    <Navmantenence />
    {/* <NavBar />
    <Section />
    <Homepage /> */}
    <HomeComponent />
   </div>
  );
}

export default App;
