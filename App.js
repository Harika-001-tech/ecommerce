import React from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Auth from './screens/Auth/Auth'
import Login from './screens/Auth/Login'
import Splash from './screens/start/Splash'
import Singleproduct from './screens/Singleproduct/Singleproduct'
import Addproduct from './screens/admin/Addproduct/Addproduct'
import Viewproduct from './screens/admin/ViewProduct/Viewproduct'

const App = () => {
  const isAuthenticated = localStorage.getItem('x-auth-token'); // Example: check for authentication token

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/singleproduct/:id' element={<Singleproduct />} />
        <Route path='/Addproduct' element={<Addproduct />} />
        <Route path='/Viewproduct' element={<Viewproduct />} />
        
        {/* Redirect to home page if not authenticated */}
        <Route path='/dashboard' element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/Login" />} />
      </Routes>
    </Router>
  )
}

export default App
