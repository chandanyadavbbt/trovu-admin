import React, { useState } from 'react';
import './form.css'; // Import your CSS file for styling
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ onClose, onUpload, setFormPopup ,ngrokURL}) => {
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [email,setEmail]=useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange=(event)=>{
        setEmail(event.target.value)
    }

    // Function to handle file upload
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        // Check if file and name are set
        if (!file || !name) {
            toast.error("Name or file not provided", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
    
        // Check file type
        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png']; // Allowed file types
        if (!allowedTypes.includes(file.type)) {
            toast.error("Invalid file type. Please choose a PDF or an Image.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
    
        // Create form data
        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', name); // Assuming the backend expects 'username' instead of 'name'
        formData.append("Email", email);
    
        try {
            toast.success("Uploading...")
            const response = await fetch(`${ngrokURL}/upload`, {
                method: 'POST',
                body: formData // Pass formData directly as the body
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('File uploaded successfully:', data);
                setFormPopup(false);
                setTimeout(()=>{
                    window.location.reload()
                    alert("File uploaded")
                },3000)
            } else {
                console.error('Failed to upload file');
            }
        } catch (error) {
            setFormPopup(false)
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
                <input
                    type="email"
                    placeholder="John@email.com"
                    className="input-field"
                    value={email}
                    onChange={handleEmailChange}
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
