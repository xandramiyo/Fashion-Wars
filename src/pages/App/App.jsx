import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'

import NavBar from '../../components/NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import AuthPage from '../AuthPage/AuthPage';
import SubmissionsPage from '../SubmissionsPage/SubmissionsPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import LikedPage from '../LikedPage/LikedPage';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser}/> } />
          <Route path="/liked" element={<LikedPage />} />
          <Route path="/settings" element={<SettingsPage user={user}/>} />
          <Route path="/:username" element={<ProfilePage user={user}/>} />
        </Routes>
      </main>
    </>
  );
}