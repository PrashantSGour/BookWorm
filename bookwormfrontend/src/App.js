import logo from './logo.svg';
import './App.css';
import NavBar from './Common/Header'
import Footer from './Common/Footer'
import ResponsiveCarousel from './Carousel'
import Check from './Check'

function App() {
  return (
    <>
    <NavBar/>
    <ResponsiveCarousel/> 
    <Check/>
    <Footer/>
    </>
  );
}

export default App;
