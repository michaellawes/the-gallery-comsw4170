import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import PageHeader from './components/HeaderComponents/PageHeader.js'
function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader/>
        <div className="body">
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App
