import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Feed from './pages/Feed.js';
import Login from './pages/Login.js'
import PageHeader from './components/HeaderComponents/PageHeader.js'
function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Feed />} />
              <Route path="/sign-in" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
