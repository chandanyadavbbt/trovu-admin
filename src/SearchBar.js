// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // const handleInputChange = (event) => {
//   //   setSearchQuery(event.target.value);
//   // };

//   const handleSearch = () => {
//     onSearch(searchQuery);
//   };
//   const handleChange = (event) => {
//     // Update the search query state as the user types
//     setSearchQuery(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     // Trigger search when Enter key is pressed
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="search-upload-delete-row">
//       <div className="search-bar">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="feather feather-search"
//         >
//           <circle cx="11" cy="11" r="8" />
//           <line x1="21" y1="21" x2="16.65" y2="16.65" />
//         </svg>
//         <input
//           type="text"
//           placeholder="Search customer's name"
//           className="search-input"
//           value={searchQuery}
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className="upload-container">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="feather feather-upload"
//         >
//           <path d="M12 5v14M5 12l7-7 7 7" />
//         </svg>
//         <span className="upload-text">Upload Document</span>
//       </div>
//       <div className="delete-container">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="feather feather-delete"
//         >
//           <polyline points="3 6 5 6 21 6" />
//           <path d="M5 6L5 21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2L19 6" />
//           <path d="M9 6V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
//         </svg>
//         <span className="delete-text">Delete</span>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
