import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallenge title="Level 1" targetTime={1}/>
      <TimerChallenge title="Level 2" targetTime={5}/>
      <TimerChallenge title="Level 3" targetTime={10}/>
      <TimerChallenge title="Level 4" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
