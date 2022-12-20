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
import GalleryView from './pages/GalleryView';
import oop from '../src/static/oop.jpg';
import coop from '../src/static/coop.jpg';
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
            <Route path="/gallery1" element={<GalleryView src={oop} title={"Communal River Gathering"} artist={"Miranda"} description={"Somewhere Out There shares exiled artists arts about the struggle to find their identity in a world that was stolen from them."}/>}/>
            <Route path="/gallery2" element={<GalleryView src={coop} title={"Midnight Storms Captured"} artist={"Don Donovan"} description={"From ethereal landscapes to vibrant abstracts, this collection showcases the talent and skill of some of the most accomplished artists of Columbia University"}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App
