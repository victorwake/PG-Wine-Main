import './App.css';
import DataProvider from '../src/components/Context/DataContext';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { Home } from './components/home/Home';
import { WineType } from './components/wineType/WineType';
import { Details } from './components/details/Details';
import { Create } from './components/create/Create';
import  Register from './components/register/Register';
import Profile from './components/profile/Profile';
import  Login  from './components/login/Login';
import HomeCarrito from './components/CartContent/HomeCarrito';
import CartContent from './components/CartContent/CartContent';
function App() {
    return (
        <DataProvider>
      <div className="App">
            <Routes>
                <Route path="/" element={< LandingPage />} />
                <Route path="/home" element={< Home />} />
                <Route path="/vinos/:type" element={<WineType />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/create/:id" element={<Create />} />
                <Route path="/create" element={<Create />} />
                <Route path="/registrar" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path='/cart' element={<CartContent />} />
                <Route path='/carrito' element={<HomeCarrito />} />
                
            </Routes>
        </div>
        </DataProvider>
    );
}

export default App;