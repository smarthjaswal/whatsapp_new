import './App.css';
import Sidebar from './Component/Sidebar';
import Chat from "./Component/Chat";
import Login from './Component/Login';
import db from './firebase';
import { getDocs, collection } from 'firebase/firestore';
import { BrowserRouter, Router } from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from './Component/StateProvider';


function App() {
  const[{user}, dispatch] = useStateValue();
 
  return (
    // BEM naming convention
    <BrowserRouter>
    <div className="App">
      {!user ?( 
      <Login/>
      ) : (
      <div className="app_body">
        
        
        <Sidebar />
        <Chat />
        
        
      </div>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
