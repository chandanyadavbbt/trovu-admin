import React from 'react';
import "./deleteModal.css";

function DeleteModal({ setDeletePop, handleDelete ,setDeletePer}) {
    function handleDelete(){
        setDeletePer(true)
    }
    function handleNoDelete(){
        setDeletePop(false)
        // setDeletePer(false)
    }
  return (
    <div className="card-container">
      <div className="card">
        <p>Are you sure you want to delete the file?</p>
        <div className="button-container">
          <button className="yes-button" onClick={handleDelete}>Yes</button>
          <button className="no-button" onClick={handleNoDelete}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
