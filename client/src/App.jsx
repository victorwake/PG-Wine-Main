import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landingPage/LandingPage';
import { Home } from './components/home/Home';
import { WineType } from './components/wineType/WineType';
import { Details } from './components/details/Details';
import { Create } from './components/create/Create';
import  Register from './components/register/Register';
import Profile from './components/profile/Profile';
import  Login  from './components/login/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { Admin } from './components/admin/Admin';
import { ShoppingCart } from './components/shoppingCart/ShoppingCart';
import { EditList } from './components/editList/EditList';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={< LandingPage />} />
                <Route path="/home" element={< Home />} />
                <Route path="/vinos/:type" element={<WineType />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/admin/create/:id" element={<Create />} />
                <Route path="/admin/create" element={<Create />} />
                <Route path="/admin/editWines" element={<EditList/>}/>
                <Route path="/registrar" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/shopingcard" element={<ShoppingCart />} />
            </Routes>
        </div>
    );
}

export default App;