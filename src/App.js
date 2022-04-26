import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AosInit } from './aos';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './app-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
const App = () => {
    AosInit()
    return (
      <>
         <BrowserRouter>
         <Navbar />
         <div className='shade'style={{backgroundColor: '#dae416', zIndex: -2, opacity: 0.3}}></div>
         <AppRouter />
         <Footer />
         </BrowserRouter>
      </>
    );
  }
  
  export default App