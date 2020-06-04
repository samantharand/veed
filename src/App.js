import React, { useState, useEffect } from 'react';
import CommentDisplay from './CommentDisplay'
import CommentBox from './CommentBox'
import './App.css';

function App() {

  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + '/comments'
      
      const getCommentsResponse = await fetch(url, {
        method: 'GET',
      })

      console.log(getCommentsResponse);

      const getCommentsJson = await getCommentsResponse.json()
      console.log(getCommentsJson);

      setComments(getCommentsJson)


    } catch (error) {
      console.error(error)
    }
  }



  return (
    <div className="Comments">
        <CommentDisplay comments={comments}/>
        <CommentBox />
    </div>
  );
}

export default App;
