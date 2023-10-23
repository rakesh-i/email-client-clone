// src/components/EmailList.js

import React, { useState, useEffect } from 'react';
import { getEmailList } from '../api/ListApi';
import EmailContent from './EmailContent'; 
import './EmailList.css'

function EmailList() {
  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  useEffect(() => {
    getEmailList()
      .then((data) => {
        setEmailList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching email data:', error);
        setLoading(false);
      });
  }, []);


  return (
    <>
      <div className='main'>
        <div className='list'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            emailList.map((email) => (
              <div className='tab'>
                <div className='holder'>
                  <div className='from'>
                    <a>From: </a>
                    <a>{email.from.name}  &lt;{email.from.email}&gt;</a>
                  </div>
                  <div>
                    <a>Subject: </a>
                    <a>{email.subject} </a>
                  </div>
                  <div className='short'>
                    <a>{email.short_description}</a>
                  </div>
                  <div className='date'>{
                      new Date(email.date).toLocaleString('en-US',{
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true, 
                      }
                    )
                  }
                </div>
              </div>  
            </div>
          )))}
        </div>
      </div>
    </>
  );
}

export default EmailList;
