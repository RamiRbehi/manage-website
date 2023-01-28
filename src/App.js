import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import BgImage from './Components/BgImage'
import BgImageII from './Components/BgImageII'

function App() {
  return (
    <div className="App">
      <BgImage>
        <Navbar/>
        <Intro/>
      </BgImage>
      <BgImageII>
        <About/>
        <Testimonials/>
      </BgImageII>
      <Footer/>
    </div>
  );
}

export default App;
