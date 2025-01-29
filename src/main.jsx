import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageNotFound from './pages/404.jsx'
import './index.css'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import DashboardWrapper from './pages/DashboardWrapper.jsx'
import UpdatePassword from './pages/updatePassword.jsx'
import DashboardHome from './pages/DashboardHome.jsx'
import TerminosCondiciones from './pages/terminos-condiciones.jsx'
import IndexWrapper from './pages/indexWrapper.jsx'
import Index from './pages/index.jsx'
import AdminDashboardHome from './pages/AdminDashboardHome.jsx'
import AdminDashboardWrapper from './pages/AdminDashboardWrapper.jsx'
import UserProfile from './pages/UserProfile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<IndexWrapper />}>
          <Route index element={< Index />} />
          <Route path='terminos-condiciones' element={< TerminosCondiciones/>} />
        </Route>

        <Route path='/adminDashboard' element={<AdminDashboardWrapper />} >
          <Route index element={<AdminDashboardHome />} />
          <Route path='userProfile/:userId' element={<UserProfile />} />
        </Route>
        

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="dashboard" element={<DashboardWrapper />}>
          <Route index element={<DashboardHome />} />
          <Route path="update-password" element={<UpdatePassword />} />
        </Route>

      <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
