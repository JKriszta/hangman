import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { randomWord, abc } from './data';
import { Figure } from './components/Figure';
import { Word } from './components/Word';
import { WrongLetters } from './components/WrongLetters';
import { Notification } from './components/Notification';
import useDimensions from "react-cool-dimensions";
import { Popup } from './components/Popup';

function App() {

  const [selectedWord, setSelectedWord] = useState(randomWord);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [notification, setNotification] = useState('');
  const [playable, setPlayable] = useState(true);

  const { observe, unobserve, width, height } = useDimensions({
    onResize: ({ observe }) => {
      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  useEffect(() => {
    observe();
  }
    , []);


  return (
    <div className="container-md p-2" ref={observe}>
      <h1 className="text-center p-2">Akasztófa játék</h1>
      <h3 className="text-center p1">Találd meg az elrejtett szót, adj meg egy betűt!</h3>
      <div className="row text-center">
        <div className="col">
          <Figure wrongLetters={wrongLetters} />
        </div>
        <div className="col">
          {wrongLetters.length > 0 && <WrongLetters wrongLetters={wrongLetters} />}
          <Word selectedWord={selectedWord}
            correctLetters={correctLetters} setCorrectLetters={setCorrectLetters}
            wrongLetters={wrongLetters} setWrongLetters={setWrongLetters}
            setNotification={setNotification}
            playable={playable} setPlayable={setPlayable}
          />
        </div>
      </div>
      {notification && <Notification notification={notification} setNotification={setNotification} width={width} height={height} />}
      {!playable && <Popup setPlayable={setPlayable} setCorrectLetters={setCorrectLetters} setWrongLetters={setWrongLetters} setSelectedWord={setSelectedWord} />}
      {/* <p>Hi! My width is {width}px and height is {height}px</p> */}
    </div>

  );
}

export default App;
