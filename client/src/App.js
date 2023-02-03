import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { General } from './components/general/General';
<<<<<<< HEAD
import { Details }  from './components/details/Details'
=======
import { WinType } from './components/wineType/WinType';
import { Details } from './components/details/Details';

>>>>>>> 8dee92399bd045ddf9b0519a318e17a553e887e5
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
         <Route path="/general" element={<General/>} />
        <Route path="/winedetail" element={<Details/>} />
=======
        <Route path="/general" element={<General />} />
        <Route path="/colourtype" element={<WinType />} />
        <Route path="/winedetail/:id" element={<Details />} />
>>>>>>> 8dee92399bd045ddf9b0519a318e17a553e887e5
      </Routes>
      
    </div>
  );
}

export default App;
