import logo from './logo.svg';
import './App.css';
import Home from './layout/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Navbar from './layout/Navbar';
import UserRegister from './models/UserRegister';
import AdmitCard from './models/AdmitCard';
import Download from './models/Download';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users/register' element={<UserRegister/>} />
        <Route path='/users/admit-card' element={<AdmitCard/>} />
        <Route path='/users/download' element={<Download/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
