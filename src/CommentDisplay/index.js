import React, { useState, useEffect } from 'react';

export default function CommentDisplay(props) {

	console.log(props);

	const commentList = props.comments.map(comment => {
		return(
			<div className='comment' key={comment.id}>
				<p> {comment.text} </p>
				<b> {comment.name} </b>
				<i> {comment.dateAdded.toLocaleString()} </i>
			</div>
		)
	})
	return (
		<div> 
			<h3> CHAT </h3>
			{commentList}
		</div>
	)
}