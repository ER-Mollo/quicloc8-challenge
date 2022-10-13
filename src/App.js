import React,{useEffect,useState} from 'react';
import './App.css';
import PropagateLoader from "react-spinners/PropagateLoader";
 import logo from './asserts/Quicloc8-logo.png';
import MyComponent from './component/mapScreen';

function App() {
const [loading,setLoading]=useState(false);

  useEffect(() => {
setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    },3500)
  },[])

  return (
    <div className="App">
      {
        loading ?(
        <div className="App-header">
        <img src={logo} alt="logo" />
        <PropagateLoader
        color={'#FF5722'}
        loading={loading}
        size={'2vh'}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>)
        :(

        <MyComponent/>
        )

      }
      
    </div>
  );
}

export default App;
