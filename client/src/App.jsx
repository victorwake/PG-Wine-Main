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
import ShoppingCart from './components/shoppingCart/ShoppingCart';


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
                <Route path='/carrito' element={<ShoppingCart/>} />
            </Routes>
        </div>
    </DataProvider>
    );
}

export default App;