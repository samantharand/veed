import React, { useState, useEffect } from 'react';

export default function CommentBox(props) {

	const [comment, setComment] = useState({
		name: 'anon',
		text: 'comment'
	})
	// const [name, setName] = useState({name: 'anon'})

	const handleCommentChange = (e) => {
		console.log(e.target.name, e.target.value);

		setComment({
			[e.target.name]: e.target.value
		})
		console.log(comment);
	}

	// const handleNameChange = (e) => {
	// 	setName({name: e.target.value})
	// }

	const submitComment = async (commentInfo) => {
		console.log(comment);
		const url = process.env.REACT_APP_API_URL + '/comments'

		const submitCommentsResponse = await fetch(url, {
			credentials: 'include',
        	method: 'POST',
        	body: JSON.stringify(commentInfo),
			headers: {
				'Content-Type': 'application/json'
			}
     	})

     	console.log(submitCommentsResponse);

     	const submitCommentJson = await submitCommentsResponse.json()

     	console.log(submitCommentJson);


	}

	const handleSubmit = (e) => {
		e.preventDefault() 
		submitComment('comment', comment)
		console.log('clicked');
	}

	return(
		<form>
			<input 
				name='name'
				placeholder='name' 
				onChange={handleCommentChange} />  
			<textarea 
				name='text'
				placeholder='comment here'
				onChange={handleCommentChange} />
			<button onClick={handleSubmit}> send comment </button>
		</form>

	)

}

