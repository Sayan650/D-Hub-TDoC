import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './User.scss'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import RepoCard1 from '../../Components/RepoCard/RepoCard1'

const User = () => {
  return (
    <div>
      <Navbar />
      <ProfileCard />
      <div className="user-content">
        <div className="left-content">
        </div>
        <div className="right-content">
        <h1 className='text'>Popular Repositories</h1>
        <RepoCard1 />
        <RepoCard1 />
        </div>
      </div>
    </div>
  )
}

export default User