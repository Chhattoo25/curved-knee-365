import React from 'react'
import { UserAuth } from '../../Context/AuthContext'

const Home = () => {
  const {user,logOut} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleSignOut} >SignOut</button>
      <h2>{user.displayName}</h2>
    </div>
  )
}

export default Home