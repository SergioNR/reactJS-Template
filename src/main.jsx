import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageNotFound from './pages/404.jsx'
import './index.css'
import App from './App.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import DashboardWrapper from './pages/DashboardWrapper.jsx'
import UpdatePassword from './pages/updatePassword.jsx'
import DashboardHome from './pages/DashboardHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />


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
