import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'

import HomePage from '../HomePage/HomePage'
import AuthPage from '../AuthPage/AuthPage';
import SubmissionsPage from '../SubmissionsPage/SubmissionsPage';
import NavBar from '../../components/NavBar/NavBar'

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
        </Routes>
      </main>
    </>
  );
}