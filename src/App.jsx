import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Employees from './Components/Employees';

import './App.css'

function App() {

  return (
    <div id="body"> 
      <Header/>
      <Employees/>
      <Footer/>
     </div>
  )
}

export default App;
