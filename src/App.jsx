import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { EvaluationProvider } from './context/EvaluationContext'
import Login from './components/Login'
import Home from './components/Home'
import Assessment from './components/Assessment'
import Results from './components/Results'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwt_token') || '')

  const handleLogin = (token) => {
    localStorage.setItem('jwt_token', token)
    setJwtToken(token)
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt_token')
    setJwtToken('')
  }

  return (
    <EvaluationProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} jwtToken={jwtToken} />} />
          <Route
            path="/"
            element={
              <ProtectedRoute jwtToken={jwtToken}>
                <Home onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute jwtToken={jwtToken}>
                <Assessment onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute jwtToken={jwtToken}>
                <Results onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </EvaluationProvider>
  )
}

export default App
