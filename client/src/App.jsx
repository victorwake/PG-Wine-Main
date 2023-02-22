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
import  RegisterAdmin  from './components/registerAdmin/RegisterAdmin'
import { ProtectedRoutes } from './components/protectedRoutes/ProtectedRoutes';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Users } from './components/UserList/userList';
import { Experiences} from './components/experiences/expSection/Experiences';

function App() {
    const currentUser  = useSelector((state) => state.usuario);
    const [showAdminBoard, setShowAdminBoard] = useState(true);

    useEffect(() => {
        if (currentUser) {
            setShowAdminBoard(currentUser.usuario.rol.includes("ADMIN_ROLE"));
            } else {
            setShowAdminBoard(false);
            }
    }, [currentUser]);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={< LandingPage />} />
                <Route path="/home" element={< Home />} />
                <Route path="/vinos/:type" element={<WineType />} />
                <Route path="/details/:id" element={<Details />} />
                <Route element={ <ProtectedRoutes admin={showAdminBoard} /> }>
                <Route path="/admin/create" element={<Create />} />
                <Route path="/admin/create/:id" element={<Create />} />
                <Route path="/admin/editWines" element={<EditList/>}/>
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/createadmin" element={<RegisterAdmin />} />
                <Route path="/admin/usuarios" element={< Users/>}/>
                /admin/createadmin
                </Route>   
                <Route path="/experiences" element={<Experiences/>}/>
                <Route path="/registrar" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/shopingcard" element={<ShoppingCart />} />
            </Routes>
        </div>
    );
}

export default App;