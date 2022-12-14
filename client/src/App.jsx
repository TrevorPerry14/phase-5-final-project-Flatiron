import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import LandingPage from "./components/LandingPage";
import ExplorePage from './components/Explore/ExplorePage';
import LogIn from './components/Login & Signup/LogIn';
import SignUp from './components/Login & Signup/SignUp';

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  
  return (
    <div>
      <NavBar/>
      <Routes >
        <Route path='/' element={<LandingPage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}/>}/>
      </Routes>
    </div>
  )
}
