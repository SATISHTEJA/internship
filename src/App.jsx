import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPass from './pages/ForgetPass'



import StudentDashboard from './pages/StudentDashboard'
import StudentProfile from './pages/StudentProfile'

import AdminDashboard from './pages/AdminDashboard'
import AdminProfile from './pages/AdminProfile'

import Management from './cardpages/Management'
import Profileinfo from './cardpages/Profileinfo'
import Remote from './cardpages/Remote'
import Mentor from './cardpages/Mentor'
import Messages from './cardpages/Messages'
import Progress from './cardpages/Progress'
import Tasks from './cardpages/Tasks'
import Pio from './cardpages/Pio'

const App = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpass" element={<ForgetPass />} />

      {/* Admin Routes */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-profile" element={<AdminProfile />} />

      {/* Student Routes */}
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/student-profile" element={<StudentProfile />} />

      {/* Card Pages */}
      <Route path="/pio" element={<Pio />} />
      <Route path="/management" element={<Management />} />
      <Route path="/profileinfo" element={<Profileinfo />} />
      <Route path="/remote" element={<Remote />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  )
}

export default App
