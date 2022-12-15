import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import LandingPage from "./components/LandingPage";
import ExplorePage from './components/Explore/ExplorePage';
import LogIn from './components/Login & Signup/LogIn';
import SignUp from './components/Login & Signup/SignUp';
import ListingsPage from './components/Send Page/ListingsPage';
import UserListingsPage from './components/User Listings/UserListingsPage';

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])


  const currentUser = sessionStorage.getItem('user_id')

  return (
    <div>
      {currentUser ? <NavBar2 /> : <NavBar />}
      <Routes >
        <Route path='/' element={<LandingPage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}/>}/>
        <Route path='/sendlistings' element={<ListingsPage />}/>
        <Route path='/userlistings' element={<UserListingsPage/>}/>
      </Routes>
    </div>
  )
}
