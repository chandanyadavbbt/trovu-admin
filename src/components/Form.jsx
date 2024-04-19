import React, { useState } from 'react';
import './form.css'; // Import your CSS file for styling
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onClose, onUpload, setFormPopup }) => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // Function to handle file upload
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
      // Check if file and name are set
      if (!file || !name) {
        toast.error("Name or file not provided",{
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",

        })
          console.error('Name or file not provided');
          // setFormPopup(false)
        return
      }
  
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('username', name); // Assuming the backend expects 'username' instead of 'name'
  
      try {
          toast.success("Data Uploading...")
          const response = await fetch('https://8605-2401-4900-1c42-8fff-00-31e-79ed.ngrok-free.app/upload', {
              method: 'POST',
              body: formData // Pass formData directly as the body
          });

          console.log(response.ok,"this is response")
  
          if (response.ok) {
              const data = await response.json();
              console.log('File uploaded successfully:', data);
            //   toast.success("File uploaded successfully")
              // setFormPopup(false)
              // Optionally, you can call a function passed as prop to handle successful upload
              // if (onUpload) {
              //     onUpload(data); // Assuming onUpload is a function passed as prop
              // }
             
              setFormPopup(false);
              
          } else {
              console.error('Failed to upload file');
          }
      } catch (error) {
          setFormPopup(false)
          console.error('Error uploading file:', error);
          console.log(error)
      }
  };
  
  
    return (
        <div className="popup-form-container">
            <div className="popup-form">
                <span className="close-btn" onClick={() => setFormPopup(false)}>&times;</span>
                <h2>Upload Document</h2>
                <input
                    type="text"
                    placeholder="John Doe"
                    className="input-field"
                    value={name}
                    onChange={handleNameChange}
                />
                <div className="file-upload-container">
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <button className="upload-btn" onClick={handleSubmit}>Submit</button>
            {/* <button onClick={notify}>Notify!</button> */}
            
            </div>
        </div>
    );
};

export default Form;

// form 
// on click of document form should open 
// form have 2 filed name and file upload .
// on submition of form it should make a post request to add the file to s3
// close button to close form 
// how many name should be there in same name 
// close button on form .
// select multiple column to delete the row
// 
// deleted the data from the table
// get data from db and remvoved ngrok dummy page
// send back deleted with id

// onclick of deleted give all data with name now delete one of them 
