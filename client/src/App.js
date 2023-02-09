import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { Home } from './components/home/Home';
import { WinType } from './components/wineType/WinType';
import { Details } from './components/details/Details';
import { Create } from './components/create/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/colortype" element={<WinType />} />
        <Route path="/winedetail/:id" element={<Details />} />
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
