import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './components/landingPage/LandingPage'
import { Home } from './components/home/Home'
import { WineType } from './components/wineType/WineType'
import { Details } from './components/details/Details'
import { Create } from './components/create/Create'
import Register from './components/register/Register'
import Profile from './components/profile/Profile'
import Login from './components/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Admin } from './components/admin/Admin'
import { ShoppingCart } from './components/shoppingCart/ShoppingCart'
import { EditList } from './components/editList/EditList'
import { Experiences } from './components/experiences/expSection/Experiences'
import { MercadoPago } from './components/MercadoPago/MercadoPago'
import { MercadoPagoSucess } from './components/MercadoPagoSucess/MercadoPagoSucess'
import { OrderList } from './components/OrderList/OrderList.jsx'
import { ExpDetails } from './components/experiences/details/ExpDetails'
import { ExpType } from './components/experiences/expType/ExpType'
import RegisterAdmin from './components/registerAdmin/RegisterAdmin'
import { ProtectedRoutes } from './components/protectedRoutes/ProtectedRoutes'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Users } from './components/UserList/userList'
import { UserList } from './components/UserList/userList'
import Orders from './components/profile/Orders'
import { CreateExp } from './components/experiences/create/CreateExp'
import { EditExpList } from './components/experiences/create/editExpList'
import { AdminOrder } from './components/OrderList/adminOrders'

function App() {
  const currentUser = useSelector(state => state.usuario)
  const [showAdminBoard, setShowAdminBoard] = useState(true)

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.usuario.rol.includes('ADMIN_ROLE'))
    } else {
      setShowAdminBoard(false)
    }
  }, [currentUser])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vinos/:type" element={<WineType />} />
        <Route path="/details/:id" element={<Details />} />
        <Route element={<ProtectedRoutes admin={showAdminBoard} />}>
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/create/:id" element={<Create />} />
          <Route path="/admin/editWines" element={<EditList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/createadmin" element={<RegisterAdmin />} />
          <Route path="/admin/usuarios" element={<UserList />} />
          <Route path="/admin/experiencias/create" element={<CreateExp />} />
          <Route path="/admin/experiencias/create/:id" element={<CreateExp />} />
          <Route path="/admin/experiencias/editExp" element={<EditExpList />} />
          <Route path="/admin/ordenes" element={<AdminOrder />} />
          /admin/createadmin
        </Route>
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/expDetails/:id" element={<ExpDetails />} />
        <Route path="/experiencias/:type" element={<ExpType />} />
        <Route path="/registrar" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/user/perfil" element={<Profile />} />
        <Route path="/user/ordenes/:id" element={<OrderList />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/procesarmp" element={<MercadoPago />} />
        <Route path="/pagoexitoso" element={<MercadoPagoSucess />} />
      </Routes>
    </div>
  )
}

export default App
