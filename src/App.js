import React, { useEffect } from "react";
import './App.css'

import CyberMain from './components/DcCyber1/Cyber1'
import Secondpicture from './components/Secondpicture/Second'
import Thirdpicture from './components/Thirdpicture/Third'
import Tournament from './components/Tournament/Tournament'
import Footer from './components/Footer/Footer'

import Aos from "aos";
import "aos/dist/aos.css";



const App = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div>
  
      <CyberMain/>
      <Secondpicture/>
      <Thirdpicture/>
      <Tournament/>
      <Footer/>

    </div>
  )
}
export default App