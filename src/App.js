import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AosInit } from './aos';

const App = () => {
    AosInit()
    return (
     <h1 data-aos="fade-up">Speed Ranger</h1>
    );
  }
  
  export default App;