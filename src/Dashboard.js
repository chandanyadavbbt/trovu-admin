import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Form from "./components/Form"
// import { Form } from 'react-router-dom';
// import { toast } from 'react-toastify';


const Dashboard = ({setFormPopup}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData1,setTableData1]=useState([])

  const rowsPerPage = 5;

  const tableData = [ 
    { name: 'Aurora Monroe', documents: 'Name of document- ram.pdf<br>Date of upload- 3/mar/2024' },
    { name: 'Phoenix Drake', documents: 'Name of document- sita.pdf<br>Date of upload- 7/mar/2024' },
    { name: 'Sterling Hayes', documents: 'Name of document- janaki.pdf<br>Date of upload- 12/mar/2024' },
    { name: 'Seraphina Knight', documents: 'Name of document- hanuma.pdf<br>Date of upload- 17/mar/2024' },
    { name: 'Orion Stone', documents: 'Name of document- vasista.pdf<br>Date of upload- 24/mar/2024' },
    { name: 'Celeste Montgomery', documents: 'Name of document- kausalya.pdf<br>Date of upload- 29/mar/2024' },
  ];

  // ---------------------------------
    useEffect(()=>{
      async function getTableData (){
        const response = await fetch("https://0f7e-2409-4081-2c92-b0a9-b4c5-398a-8b19-e29e.ngrok-free.app/trovu/data",{
          method: "get",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          })
        })
          const data = await response.json()
          console.log("this is data table ",data)
          setTableData1(data)
        
      }
      getTableData()
    },[])
    // console.log(tableData1,"this is table data")

  // ---------------------------------

  // Function to handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0]; 
    if (!file) {
      console.error('No file selected');
      return;
    }
  
    const formData = new FormData(); 
    formData.append('file', file); 
  
    try {
      const response = await fetch('https://0f7e-2409-4081-2c92-b0a9-b4c5-398a-8b19-e29e.ngrok-free.app/upload', {
        method: 'POST',
        body: formData
      });
  
      // Handle successful upload
      const data = await response.json();
      alert("successfull")
      console.log('File uploaded successfully:', data);
    } catch (error) {
      // Handle error
      console.error('Error uploading file:', error);
    }
  };
  
  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };
  
  // Filter table data based on search query
  const filteredTableData = tableData1.filter(item =>
    item.Username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // console.log(filter)
  console.log(filteredTableData, "i am filter data ")
  
  // Function to handle download
  // const handleDownload = (documentName) => {
  //   setShowModal(true);
  //   console.log(`Downloading ${documentName}`);
  // };
  const handleDownload = (documentName) => {
    // Function to handle download
    const fileName = documentName.split('-')[0].trim(); // Extract filename from document description
    const blob = new Blob([fileName], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.pdf`; // Set the filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  // Pagination variables
  const totalPages = Math.ceil(filteredTableData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  let endIndex = startIndex + rowsPerPage;
  if (endIndex > filteredTableData.length) {
    endIndex = filteredTableData.length;
  }
  
  // Function to handle page change
  const handlePageChange = (increment) => {
    const newPage = currentPage + increment;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  
  // Function to handle input change
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  // Function to handle key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  // Function to trigger file input click
  const triggerFileInputClick = () => {
    document.getElementById('file-upload').click();
  };
  
  // JSX
  return (
    
    <div className="dashboard">
      <div className="search-upload-delete-row">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search customer's name"
            className="search-input"
            value={searchQuery}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          {/* <button onClick={handleSearch}>Search</button> */}
        </div>
        <div className="upload-container" onClick={setFormPopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-upload"
          >
            <path d="M12 5v14M5 12l7-7 7 7" />
          </svg>
          <span className="upload-text">Upload Document</span>
          <input
            type="file"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </div>
        <div className="delete-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-delete"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M5 6L5 21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2L19 6" />
            <path d="M9 6V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
          </svg>
          <span className="delete-text">Delete</span>
        </div>
      </div>
      
      <div className="table-container">
        <div className="table-scroll-container">
          <table className='table-border'>
            <thead>
              <tr>
                <th className='names-column'>Customer's Name</th>
                <th className="documents-column">Documents Description</th>
                <th className='download-column'>Download Document</th>
              </tr>
            </thead>
            <tbody>
              {filteredTableData.slice(startIndex, endIndex).map((row, index) => (
                <tr key={index}>
                  <td className='name-cell'>{row.Username}
                  {/* <input type='checkbox'/> */}
                  </td>

                  <td className='document-cell' dangerouslySetInnerHTML={{ __html: row.Filename}}></td>
                  <td>
                    <button className="download-button" onClick={() => handleDownload(row.Filename)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="40" height="40" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {(currentPage !== 1 || currentPage !== totalPages) && (
          <div className="pagination" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <button onClick={() => handlePageChange(-1)}>{'<'}</button>
            <span style={{ borderBottom: '1px solid #3C7DAB', padding: '0' }}>{`${endIndex} of ${filteredTableData.length}`}</span>
            <button onClick={() => handlePageChange(1)}>{'>'}</button>
          </div>
        )}
      </div>
      {/* Modal for download confirmation */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Download Confirmation"
        style={{
          content: {
            width: '500px',
            height: '200px',
            margin: 'auto', 
            backgroundColor: '#E5F0F8',
          }
        }}
      >
        <h2>Download Confirmation</h2>
        <p>Do you want to download the document?</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={() => setShowModal(false)}>Confirm</button>
          <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </Modal>
     
     
    </div>
      
  );
};

export default Dashboard;