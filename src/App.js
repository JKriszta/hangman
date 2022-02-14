import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { randomWord, abc } from './data';
import { Figure } from './components/Figure';
import { Word } from './components/Word';

function App() {

  const [ selectedWord, setSelectedWord ] = useState(randomWord);
  const [ wrongLetters, setWrongLetters ] = useState([]);
  const [ correctLetters, setCorrectLetters ] = useState([]);
  const [ notification, setNotification ] = useState('');
  const [ playable, setPlayable ] = useState(true);




  return (
    <div className="container-md p-2">
      <h1 className="text-center p-2">Akasztófa játék</h1>
      <h3 className="text-center p1">Találd meg az elrejtett szót, adj meg egy betűt!</h3>
      <div className="row text-center">
        <div className="col">
          <Figure wrongLetters={wrongLetters} />
        </div>
        <div className="col">
          <Word selectedWord={selectedWord}
                correctLetters={correctLetters} setCorrectLetters={setCorrectLetters}
                wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
