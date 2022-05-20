import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AosInit } from './aos';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './app-router';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import store from './redux/store';
const App = () => {
    AosInit()
    return (
      <Provider store={store}>
         <BrowserRouter>
         <Navbar />
         <AppRouter />
         <Footer />
         </BrowserRouter>
      </Provider>
    );
  }
  
  export default App