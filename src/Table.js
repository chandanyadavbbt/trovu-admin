// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import SearchBar from './SearchBar';


// const Table = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showModal, setShowModal] = useState(false); 
//   const [searchQuery, setSearchQuery] = useState('');
//   const rowsPerPage = 5;

//   const tableData = [
//     { name: 'Ram', documents: 'Name of document:<br>Type of document:' },
//     { name: 'sita', documents: 'Name of document:<br>Type of document:'},
//     { name: 'Janaki', documents: 'Name of document:<br>Type of document:' },
//     { name: 'Hanuma', documents: 'Name of document:<br>Type of document:'},
//     { name: 'Vasista', documents: 'Name of document:<br>Type of document:' },
//     { name: 'kausalya', documents: 'Name of document:<br>Type of document:'},
//   ];

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     setCurrentPage(1); // Reset current page to 1 when performing a new search
//   };

//   const filteredTableData = tableData.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleDownload = (documentName) => {
//     // Show the modal when download button is clicked
//     setShowModal(true);
//     console.log(`Downloading ${documentName}`);
//   };

//   const totalPages = Math.ceil(tableData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   let endIndex = startIndex + rowsPerPage;
//   if (endIndex > tableData.length) {
//     endIndex = tableData.length;
//   }

//   const handlePageChange = (increment) => {
//     const newPage = currentPage + increment;
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="table-container">
//       <div className="table-scroll-container">
//         <table>
//           <thead>
//             <tr>
//               <th className='names-column'>Customer's Name</th>
//               <th className="documents-column">Documents Description</th>
//               <th className='download-column'>Download Document</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tableData.slice(startIndex, endIndex).map((row, index) => (
//               <tr key={index}>
//                 <td className='name-cell'>{row.name}</td>
//                 <td className='document-cell' dangerouslySetInnerHTML={{ __html: row.documents }}></td>
//                 <td>
//                   <button className="download-button" onClick={() => handleDownload(row.documents)}>
//                   <img src="https://cdn-icons-png.flaticon.com/128/2874/2874776.png" alt="Download" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {(currentPage !== 1 || currentPage !== totalPages) && (
//         <div className="pagination" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
//           <button onClick={() => handlePageChange(-1)}>{'<'}</button>
//           <span>{`${endIndex} of ${tableData.length}`}</span>
//           <button onClick={() => handlePageChange(1)}>{'>'}</button>
//         </div>
//       )}
//       {/* Modal for download confirmation */}
//       <Modal
//         isOpen={showModal}
//         onRequestClose={() => setShowModal(false)}
//         contentLabel="Download Confirmation"
//         style={{
//           content: {
//             width: '500px',
//             height: '200px', // Adjust the width as needed
//             margin: 'auto', // Center the modal horizontally
//           }
//         }}
//       >
//         <h2>Download Confirmation</h2>
//         <p>Do you want to download the document?</p>
//         <div className="modal-buttons">
//           <button className="confirm-button" onClick={() => setShowModal(false)}>Confirm</button>
//           <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Table;