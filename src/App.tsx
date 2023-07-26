import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';

function App() {
  const [ShowScoreboard, setShowScoreboard] = useState<boolean>(false);

  const toggleScoreboard = () => setShowScoreboard(!ShowScoreboard);

  return (
    <div className="App">
      <Header />
      {!ShowScoreboard && <button onClick={toggleScoreboard}>Show scoreboard</button>}
      {
        ShowScoreboard && <Scoreboard showScores={ShowScoreboard} hideScoreboard={toggleScoreboard}/>
      }
      <br />
    </div>
  );
}

export default App;
