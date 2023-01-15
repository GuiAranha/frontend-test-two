import React, { useState, useEffect } from 'react';
import CatCard from '../components/catCard';
import NavBar from '../components/navBar';
import { getCatMessage } from '../services/api';

function Cat() {
  const [url, setUrl] = useState();
  const [message, setMessage] = useState();

  async function getCat(yourMessage) {
    const data = await getCatMessage(yourMessage);
    const result = {
      url: data.url
    }
    setUrl(result);
  }

  function generateCatMessage(event) {
    getCat(message)
  }

  return (
    <>
    <NavBar />
      <h1>Cat Page</h1>
      <form> 
          <label htmlFor="message">Message:</label><br />
          <input type="text" id="message" name="message" value={message} placeholder='your text' onChange={event => setMessage(event.target.value)} /><br />
          <button type="button" onClick={() => generateCatMessage()}>Submit</button>
      </form>
      <CatCard {...url}/>
    </>
  );
}

export default Cat