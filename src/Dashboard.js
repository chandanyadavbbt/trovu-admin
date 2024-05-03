import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Form from "./components/Form"
import { toast } from 'react-toastify';
import NavigationBar from './NavigationBar';
import EmbbedWebsite from "./components/EmbeddedWebsite"
// import { Form } from 'react-router-dom';
// import { toast } from 'react-toastify';
const url = "https://2918-2401-4900-1c42-8fff-00-347-6f77.ngrok-free.app/"


const Dashboard = ({setFormPopup,ngrokURL,setDeletePop,deletePer,setDeletePer}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData1,setTableData1]=useState([])
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [embbed ,setEmbbed]=useState(false)

  const rowsPerPage = 5;

  
  const kibanaUrl = 'https://f5a3-2401-4900-1c42-8fff-00-347-6f77.ngrok-free.app';
  // ---------------------------------
    useEffect(()=>{

    async function getTableData() {
      try {
        const response = await fetch(`${ngrokURL}/trovu/data`, {
          method: "get",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data 1");
        }
        const data = await response.json();
        setTableData1(data);
      } catch (error) {
        toast.error("Fail to fetch check connection")
        console.error("Error fetching table data:", error);
        // Handle error here, such as displaying a message to the user
      }
    }
    
    // Call the function
    getTableData();
    },[])
    // console.log(tableData1,"this is table data")

  // ---------------------------------
  
  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };
  
  // Filter table data based on search query
  const filteredTableData = tableData1.filter(item =>
    item.Username.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

 
const handleDelete = async (document) => {
  console.log(document,"this is doc");
  // setDeletePop(true)
  
  
  // Parse the date string into a Date object
  const parsedDate = new Date(document.date);
  
  // Extract the year, month, and day from the Date object
  const year = parsedDate.getFullYear();
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = parsedDate.getDate().toString().padStart(2, "0");
  
  // Concatenate the year, month, and day with no separator
  const formattedDate = `${year}${month}${day}`;
  
  try {
    alert("Are you sure, You want to delete the file?")
    const response = await fetch(`${ngrokURL}delete_file`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: document.id,
        username: document.Username,
        filename: document.Filename,
        date: formattedDate , // Use the formatted date here
        Email:document.Email,
        uuid:document.uuid
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // Handle successful deletion
      console.log('Document deleted successfully');
      window.location.reload()
    } else {
      // Handle deletion failure
      console.error('Failed to delete document');
    }
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};
  function handleSearchKibana(){
    setEmbbed(true)
    // window.location.href="http://www.google.com"
  }


  
  // JSX
  return (
    <>
    {}
     <div className="navigation-wrapper">
        <NavigationBar />
      </div>
      <div className="content">

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
            // onChange={handleFileUpload}
            />
        </div>
        <div className="delete-container">
        <svg style={{width:"32px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>

          <span onClick={handleSearchKibana} className="delete-text">Search Documents</span>
        </div>
      </div>
      
      
      <div className="table-container">
        {!embbed?
        <div className="table-scroll-container">
          <table className='table-border'>
            <thead>
              <tr>
                <th className='names-column'>Customer's Name</th>
                <th className="documents-column">Documents Description</th>
                <th className='download-column'>Download</th>
                <th className='delete-column'>Delete</th>
                {/* <th className='info-column'>Info</th> */}
              </tr>
            </thead>
            <tbody>
            {filteredTableData.slice(startIndex, endIndex).map((row, index) => (
  <tr key={index}>
    <td className='name-cell'>{row.Username}</td>
    <td className='document-cell' onMouseEnter={() => setSelectedDocument(row)} onMouseLeave={() => setSelectedDocument(null)}>
      <div dangerouslySetInnerHTML={{ __html: row.Filename }}></div>
    </td>
    <td>
      <button className="download-button" onClick={() => handleDownload(row.Filename)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="40" height="40" stroke="currentColor" class="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" fill='black'/>
        </svg>
      </button>
    </td>
    <td>
      {/* <h1 className="delete-button" onClick={() => handleDelete(row)}>Delete</h1> */}
      <svg  className="delete-button" onClick={() => handleDelete(row)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>

    </td>
    {/* <td>info</td> */}
    {/* <td>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
    </td> */}

  </tr>
))}

            </tbody>
          </table>
        </div>
:<EmbbedWebsite/>}
        {(currentPage !== 1 || currentPage !== totalPages) && (
          <div className="pagination" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <button onClick={() => handlePageChange(-1)}>{'<'}</button>
            <span style={{ borderBottom: '1px solid #3C7DAB', padding: '0' }}>{`${endIndex} of ${filteredTableData.length}`}</span>
            <button onClick={() => handlePageChange(1)}>{'>'}</button>
          </div>
        )}
      </div>
      </div>
        </div>
      
    </>
  );
};

export default Dashboard;

