import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { Home } from './components/home/Home';
import { WineType } from './components/wineType/WineType';
import { Details } from './components/details/Details';
import { Create } from './components/create/Create';
import { Login } from './components/login/Login';
// import { Admin } from './components/admin/Admin';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={< LandingPage />} />
                <Route path="/home" element={< Home />} />
                <Route path="/vinos/:type" element={<WineType />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/create/:id" element={<Create />} />
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/admin" element={<Admin/>}/> */}
            </Routes>
        </div>
    );
}

export default App;