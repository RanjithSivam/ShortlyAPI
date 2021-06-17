import './App.css';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Statistics from './Components/Statistics';
import Footer from './Components/Footer';
import MobileNav from './Components/MobileNav';
import { useState } from 'react';

function App() {
  const [hide,setHide] = useState(false);
  const show = () =>{
    setHide(!hide);
    console.log("chaneh")
  }
  return (
    <div className="app">
      <Navbar />
      <MobileNav show={show} />
      <Landing hide={hide} />
      <Statistics />
      <div className="subcontent">
          <div className="container subcontent__container">
            <p>Boost your links today</p>
            <div className="subcontent__button">
              Get Started
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
