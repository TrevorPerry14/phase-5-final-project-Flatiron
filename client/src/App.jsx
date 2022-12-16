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
import SendingPage from './components/Sending Page/SendingPage';
import UserProfile from './components/Profile Page/UserProfile';
import ConsoleDetails from './components/Explore/ConsoleDetails';
import GameDetails from './components/Explore/GameDetails';

export default function App() {
  const [users, setUsers] = useState([])
  const [listings, setListings ] = useState([])
  const [ user, setUser ] = useState([])
  const [ currentConsole, setCurrentConsole ] = useState([])
  const [ currentGame, setCurrentGame ] = useState([])
  

  useEffect(() => {
    fetch(`/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    fetch(`/listings`)
    .then(res => res.json())
    .then(data => setListings(data))
}, [setListings])

useEffect(() => {
  fetch(`/users/${currentUser}`)
  .then(res => res.json())
  .then(data => setUser(data))
}, [setUser])

  function removeListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id)
      setListings(newListings)
}

  function updateListings(newListing) {
    setListings([newListing, ...listings])
  }

  const currentUser = sessionStorage.getItem('user_id')

  return (
    <div>
      {currentUser ? <NavBar2 user={user}/> : <NavBar />}
      <Routes >
        <Route path='/' 
          element={<LandingPage 
            currentUser={currentUser}
          />}/>
        <Route path='/explore' 
          element={<ExplorePage setCurrentConsole={setCurrentConsole} setCurrentGame={setCurrentGame}/>
          }/>
        <Route path='/login' 
          element={<LogIn />
          }/>
        <Route path='/signup' 
          element={<SignUp 
          users={users} 
          setUsers={setUsers}/>
          }/>
        <Route path='/sendlistings' 
          element={<ListingsPage 
          listings={listings}/>
          }/>
        <Route path='/userlistings' 
          element={<UserListingsPage 
          removeListing={removeListing} 
          updateListings={updateListings}
          user={user}/>
          }/>
        <Route path='/sending' 
          element={<SendingPage />
          }/>
        <Route path='/userprofile' 
          element={<UserProfile user={user}/>
          }/>
        <Route path='/consoledetails' 
          element={<ConsoleDetails 
            currentConsole={currentConsole}/>
          }/>
        <Route path='/gamedetails' 
          element={<GameDetails 
          currentGame={currentGame}/>
          }/>
      </Routes>
    </div>
  )
}
