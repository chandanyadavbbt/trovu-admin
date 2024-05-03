import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Dashboard from './Dashboard';
import Form  from './components/Form';
import { useSearchParams } from 'react-router-dom';
import TableBack from './components/TableBack';
import EmbeddedWebsite from './components/EmbeddedWebsite';
import DeleteModal from './components/DeleteModal';
const ngrokURL='https://3f86-2401-4900-1c42-8fff-00-384-1bf8.ngrok-free.app/'

function App() {
  // state to handle form popup 
  const [formPopup,setFormPopup]=useState(false)
  const [deletePop,setDeletePop]=useState(false)
  const [deletePer,setDeletePer]=useState(false)
  console.log(deletePer, "this is state of dlete ")
  return (
    <div className="app">
      {/* <div className="navigation-wrapper">
        <NavigationBar />
      </div> */}
      {/* <div className="content"> */}
        <Dashboard setFormPopup={setFormPopup} setDeletePop={setDeletePop} setDeletePer={setDeletePer} deletePer={deletePer} ngrokURL={ngrokURL}/>
        {/* <Form/> */}
      {/* </div> */}
      {formPopup?<Form setFormPopup={setFormPopup} ngrokURL={ngrokURL}/>:null}
      {/* <TableBack/> */}
      {/* <EmbeddedWebsite/> */}
      {/* <DeleteModal/> */}
      {deletePop?<DeleteModal setDeletePop={setDeletePop} setDeletePer={setDeletePer}deletePer={deletePer} ngrokURL={ngrokURL}/>:null}
      
    </div>
  );
}

export default App;