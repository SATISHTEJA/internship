import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard'
import ForgetPass from "./pages/ForgetPass";
import AdminProfile from './pages/AdminProfile'
import MainLayout from './layouts/MainLayout'
import AdminDashboard from './pages/AdminDashboard'
import Management from './cardpages/Management'
import Profileinfo from './cardpages/Profileinfo'
import Remote from './cardpages/Remote'
import Mentor from './cardpages/Mentor'
import Messages from './cardpages/Messages'
import Progress from './cardpages/Progress'
import Tasks from './cardpages/Tasks'
import StudentProfile from './pages/StudentProfile'
import Home from './pages/home'
import Pio from "./cardpages/Pio";
import Login from './Pages/login'
import Register from './pages/register'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/admin-profile" element={<AdminProfile />} />
      <Route path='Forgetpass' element={<ForgetPass />} />
      <Route path="/pio" element={<Pio />} />
      <Route path="/management" element={<Management />} />
      <Route path="/profileinfo" element={<Profileinfo />} />
      <Route path="/remote" element={<Remote />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/student-profile" element={<StudentProfile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />  
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  )
}

export default App
