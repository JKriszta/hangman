import React from 'react'

export const WrongLetters = ({ wrongLetters }) => {


	return (
		<div className="text-start">
			<p>Rossz tippek:</p>
			{wrongLetters.map((letter, i) =>
				<span key={i} className="text-danger border-bottom p-2 m-2">{letter}</span>
			)}
		</div>

	)
}

