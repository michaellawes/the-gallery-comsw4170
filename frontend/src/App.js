import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile';
import ArtistPage from './pages/ArtistPage';
import Notifications from './pages/Notifications';
import PageHeader from './components/HeaderComponents/PageHeader.js'
import GallleryCreation from './pages/GalleryCreation'
function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader/>
        <div className="body">
          <Routes>
            <Route exact path="/" element={<Feed/>} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/profile" element={<ArtistPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/gallery-creation" element={<GallleryCreation />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App
