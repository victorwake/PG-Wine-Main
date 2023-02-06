import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { General } from './components/general/General';
import { WinType } from './components/wineType/WinType';
import { Details } from './components/details/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/general" element={<General />}/>
<<<<<<< HEAD
        {/* <Route path="/general" element={<General />} /> */}
=======
        <Route path="/general" element={<General />} />
>>>>>>> adf19d32e6d5837eecf8e3a9bbded53b956a6597
        <Route path="/colourtype" element={<WinType />} />
        <Route path="/winedetail/:id" element={<Details />} />
      </Routes>

    </div>
  );
}

export default App;