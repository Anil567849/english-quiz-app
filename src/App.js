import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Play from './pages/Play.jsx';
import Score from './pages/Score.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/play" element={ <Play/> }/>
        <Route path="/score" element={ <Score/> }/>
        <Route path="*" element={ <Home/> }/>
      </Routes>
    </div>
  );
}

export default App;
