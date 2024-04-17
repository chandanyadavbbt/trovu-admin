import React, { useState } from 'react';
import './form.css'; // Import your CSS file for styling

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
          console.error('Name or file not provided');
          return;
      }
  
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      formData.append('username', name); // Assuming the backend expects 'username' instead of 'name'
  
      try {
          const response = await fetch('https://0f7e-2409-4081-2c92-b0a9-b4c5-398a-8b19-e29e.ngrok-free.app/upload', {
              method: 'POST',
              body: formData // Pass formData directly as the body
          });
  
          if (response.ok) {
              const data = await response.json();
              console.log('File uploaded successfully:', data);
              // Optionally, you can call a function passed as prop to handle successful upload
              if (onUpload) {
                  onUpload(data); // Assuming onUpload is a function passed as prop
              }
              // Close the popup form
              setFormPopup(false);
          } else {
              console.error('Failed to upload file');
          }
      } catch (error) {
          console.error('Error uploading file:', error);
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
