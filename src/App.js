import './App.css';
import About from './Components/About';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
