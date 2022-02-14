import React, { useEffect } from 'react'
import { abc } from '../data';


export const Word = ({ selectedWord, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters }) => {
	console.log(selectedWord);
	console.log(correctLetters);
	console.log(wrongLetters);

	useEffect(() =>{
		window.addEventListener('keydown', handleKeyDown);
		return ()=> {window.removeEventListener('keydown', handleKeyDown)};
	},[selectedWord, correctLetters, wrongLetters]);

	const handleKeyDown = (e) => {
		console.log(e.key);
		let letter = e.key.toLowerCase();
		if(abc.includes(letter.toUpperCase())){
			if(selectedWord.includes(letter) && correctLetters.includes(letter)){
				console.log('ez a betű már volt');
			} else if (selectedWord.includes(letter)) {
					setCorrectLetters([...correctLetters, letter]);
			} else {
				  setWrongLetters([...wrongLetters, letter]);
			}
		}
	}
	return (
		<div  className="d-flex justify-flex-end" >
			{selectedWord.split('').map((letter,i) =>
				<span key={i} className="letter">{correctLetters.includes(letter) ? letter : ''}</span>
			)}
		</div>
	)
}