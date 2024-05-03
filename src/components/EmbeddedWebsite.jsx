import React, { useEffect, useState } from 'react';
import "./embeddedWebsite.css"

function MyComponent() {
  const [iframeContent, setIframeContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
async function  embedWeb(){

    
    // Fetch the HTML content from your Node.js server
   let em = await fetch('http://localhost:4500/',{
    method: "get",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          }),
   })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch HTML');
        }
        return response.text();
      })
      .then(html => {
        // Set the fetched HTML content to the state
        setIframeContent(html);
      })
      .catch(error => {
        setError(error.message); // Set error state with the error message
        console.error('Error fetching HTML:', error);
      });
}embedWeb()}, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* <h1>My React Page</h1> */}
      <div className='kibanaWindow' dangerouslySetInnerHTML={{ __html: iframeContent }} />
    </div>
  );
}

export default MyComponent;
