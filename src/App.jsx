import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './component/profile'
import Login from './component/Login'




const App = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loginDetails, setLoginDetails] = useState([])
  function onSubmit(e) {
    e.preventDefault()
    setLoginDetails((prevDetails) => {

    const newDetails = [...prevDetails, {userName, password}]
     userName && password != '' ? localStorage.setItem('loginDetails', JSON.stringify(newDetails)): ''

     return newDetails;
      
    })
    setPassword('')
    setUserName('')
  }

  // let users = JSON.parse(localStorage.getItem('loginDetails')) || [];


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login
            userName={userName}
            setUserName={setUserName}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
        />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  </>  
  )
}

export default App