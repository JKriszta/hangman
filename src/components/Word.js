import React, { useEffect } from 'react'
import { abc } from '../data';


export const Word = ({ selectedWord, correctLetters, setCorrectLetters, wrongLetters, setWrongLetters, setNotification, playable, setPlayable }) => {

	const uniqueLetters = [...new Set(selectedWord.slice(''))];
	console.log(uniqueLetters);

	console.log(selectedWord);
	// console.log(correctLetters);
	// console.log(wrongLetters);

	useEffect(() =>{
		window.addEventListener('keydown', handleKeyDown);
		return ()=> {window.removeEventListener('keydown', handleKeyDown)};
	},[selectedWord, correctLetters, wrongLetters, playable]);

	const handleKeyDown = (e) => {
		console.log(e.key);
		let letter = e.key.toLowerCase();
		if(abc.includes(letter.toUpperCase())){
			if(selectedWord.includes(letter) && correctLetters.includes(letter)){
				setNotification('ez a betű már volt');
			} else if (selectedWord.includes(letter)) {
					setCorrectLetters([...correctLetters, letter]);
					if(correctLetters.length + 1 === uniqueLetters.length) {
						setNotification('Vége a játéknak 😊')
						setPlayable(false);
					}
			} else if(!wrongLetters.includes(letter)){
				  setWrongLetters([...wrongLetters, letter]);
					setNotification('Rossz betű');
					if(wrongLetters.length === 5) {
						setNotification('Vége a játéknak 😣')
						setPlayable(false);
					}
			} else
					setNotification('ez a betű már volt');
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