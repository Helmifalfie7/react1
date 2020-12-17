import Navigation from './Components/Navbar'
import Formulaire from './Components/Form'
import ControlledCarousel from './Components/Carousel'
import './App.css';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <ControlledCarousel/>
      <Formulaire/>
      
    </div>
  );
}

export default App;

