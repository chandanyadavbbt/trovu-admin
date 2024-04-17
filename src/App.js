import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Dashboard from './Dashboard';
import Form  from './components/Form';
import { useSearchParams } from 'react-router-dom';
import TableBack from './components/TableBack';

function App() {
  // state to handle form popup 
  const [formPopup,setFormPopup]=useState(false)
  return (
    <div className="app">
      <div className="navigation-wrapper">
        <NavigationBar />
      </div>
      <div className="content">
        <Dashboard setFormPopup={setFormPopup}/>
        {/* <Form/> */}
      </div>
      {formPopup?<Form setFormPopup={setFormPopup}/>:null}
      {/* <TableBack/> */}
    </div>
  );
}

export default App;