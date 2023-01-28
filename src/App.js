import './App.css';
import About from './Components/About';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Testimonials/>
    </div>
  );
}

export default App;
