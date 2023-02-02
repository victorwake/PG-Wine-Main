import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import {Details} from '../src/components/details/Details';
import { General } from './components/general/General';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/general" element={<General/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
      
    </div>
  );
}

export default App;
