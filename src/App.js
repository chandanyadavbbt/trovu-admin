import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Dashboard from './Dashboard';
import Form  from './components/Form';
import { useSearchParams } from 'react-router-dom';
import TableBack from './components/TableBack';
const ngrokURL='https://9567-2401-4900-1c42-8fff-00-347-6f77.ngrok-free.app'

function App() {
  // state to handle form popup 
  const [formPopup,setFormPopup]=useState(false)
  return (
    <div className="app">
      {/* <div className="navigation-wrapper">
        <NavigationBar />
      </div> */}
      {/* <div className="content"> */}
        <Dashboard setFormPopup={setFormPopup} ngrokURL={ngrokURL}/>
        {/* <Form/> */}
      {/* </div> */}
      {formPopup?<Form setFormPopup={setFormPopup} ngrokURL={ngrokURL}/>:null}
      {/* <TableBack/> */}
      
    </div>
  );
}

export default App;