import React,{useEffect,useState} from 'react';

import PropagateLoader from "react-spinners/PropagateLoader";
 import logo from './asserts/Quicloc8-logo.png';
import MyComponent from './component/mapScreen';
import Message from './component/message';
import {Route, Routes} from 'react-router-dom'
function App() {

  return (
    <Routes>

          <Route path = "/"  index element={<MyComponent/>} />

          <Route path = "/message" element={<Message/>}/>

          
        </Routes>
  );
}

export default App;
