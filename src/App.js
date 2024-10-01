import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Testmonial from './components/Testmonial/Testmonial';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
    <NavBar />
    <Header />
    <Services />
    <About />
    <Testmonial />
    <Footer />
    <Routes>
    </Routes>
    </>
  );
}

export default App;
