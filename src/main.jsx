import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageNotFound from './pages/site/404.jsx'
import './index.css'
import Login from './pages/auth/LoginPage.jsx'
import Register from './pages/auth/RegisterPage.jsx'
import UpdatePasswordPage from './pages/user/UpdatePasswordPage.jsx'
import TerminosCondiciones from './pages/site/terminos-condiciones.jsx'
import IndexWrapper from './pages/indexWrapper.jsx'
import Index from './pages/index.jsx'
import AdminDashboardHome from './pages/admin/AdminDashboardHome.jsx'
import AdminDashboardWrapper from './pages/admin/AdminDashboardWrapper.jsx'
import UserProfile from './pages/user/UserProfile.jsx'
import UserWrapper from './pages/user/UserWrapper.jsx'
import UserHome from './pages/user/UserHome.jsx'
import RecoverPasswordPage from './pages/auth/RecoverPasswordPage.jsx'
import FAQs from './pages/site/FAQs.jsx'
import AuthWrapper from './pages/auth/AuthWrapper.jsx'
import UpdateRecoveredPasswordPage from './pages/auth/UpdateRecoveredPasswordPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexWrapper />}>
          <Route index element={< Index />} />
          <Route path='terminos-condiciones' element={< TerminosCondiciones/>} />
          <Route path='preguntas-frecuentes' element={< FAQs/>} />
        </Route>

        <Route path='/admin' element={<AdminDashboardWrapper />} >
          <Route index element={<AdminDashboardHome />} />
          
        </Route>

        <Route path='/user' element={<UserWrapper />} >
          <Route index element={<UserHome />} />
          <Route path='user-profile' element={<UserProfile />} />
          <Route path="update-password" element={<UpdatePasswordPage />} />
        </Route>
        

        <Route path="/auth" element={<AuthWrapper />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='recover-password' element={<RecoverPasswordPage />} />
          <Route path='create-new-password' element={<UpdateRecoveredPasswordPage />} />
        </Route>


      <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
