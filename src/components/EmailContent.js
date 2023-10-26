import React, { useState, useEffect } from 'react';
import './EmailContent.css'
function EmailContent({ emailId }) {
  const [emailContent, setEmailContent] = useState(null);

  useEffect(() => {
    // Fetch email content from another API using the emailId
    // Replace 'your-email-content-api-url' with the actual API URL
    fetch(`https://flipkart-email-mock.vercel.app/?id=${emailId}`)
      .then((response) => response.json())
      .then((data) => {
        setEmailContent(data);
      })
      .catch((error) => {
        console.error('Error fetching email content:', error);
      });
  }, [emailId]);

  return (
    <div>
      {emailContent ? (
        <div className='container'>
          <div dangerouslySetInnerHTML={{ __html: emailContent.body }} />
        </div>
      ) : (
        <p>Loading email content...</p>
      )}
    </div>
  );
}

export default EmailContent;
