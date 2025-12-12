import { useState } from 'react';
import './App.css';
import { Route , Routes , BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import About from './About';
import Payment from './Payment';







function App() {




  return (


    <div class= ' h[100vh] flex justify-center items-center'>
      <BrowserRouter>
      <Routes>
        
          <Route path= '/login' element={<Login/>} />
          <Route path='/about' element={<About />} />
          <Route  path='/payment' element= {<Payment/>}/>
         
      
   
        
      </Routes>
    </BrowserRouter>
  
  

      
    
    </div>
  );
}

export default App;

