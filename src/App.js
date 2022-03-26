
import './App.css';
import Header from './components/Header/Header';
import SwipeButtons from './components/SwipeButton/SwipeButtons';
import TinderCaard from './components/TinderCard/TinderCard';


function App() {
  return (
    <div className="app">





      {/* Header */}

      <Header />

      {/* Tinder Card */}

      <TinderCaard />

      {/* buttons-header */}
      <SwipeButtons />
    </div>
  );
}

export default App;
