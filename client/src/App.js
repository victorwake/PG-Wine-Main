import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { Home } from './components/home/Home';
import { WinType } from './components/wineType/WinType';
import { Details } from './components/details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/colourtype" element={<WinType />} />
        <Route path="/winedetail/:id" element={<Details />} />
      </Routes>
      
    </div>
  );
}

export default App;
