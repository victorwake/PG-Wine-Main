import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { General } from './components/general/General';
import { Details }  from './components/details/Details'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/general" element={<General/>} />
        <Route path="/winedetail" element={<Details/>} />
      </Routes>
      
    </div>
  );
}

export default App;
