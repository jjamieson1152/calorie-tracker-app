import './App.css';
import AppBar from './components/AppBar/AppBar';
import AppControlsCounter from './components/AppControls/AppControlsCounter';

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <AppControlsCounter />
    </div>
  );
}

export default App;
