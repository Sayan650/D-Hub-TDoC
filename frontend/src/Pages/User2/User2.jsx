import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './User2.scss';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import RepoCard2 from '../../Components/RepoCard2/RepoCard2';

const User2 = () => {
  return (
    <div>
      <Navbar />
      <ProfileCard />
        <div className="user-content">
            <div className="left-content">
            </div>
            <div className="right-content">
                <div className="search-and-button-container">
                    <div className="reposearch-container">
                    <input type="text" placeholder="Find a Repository" className="reposearch-bar" />
                    </div>
                    <div>
                    <button className="button">New</button>
                    </div>
                </div>
                <div className="repo-card-container">
                    <RepoCard2 />
                    <RepoCard2 />
                    <RepoCard2 />
                    <RepoCard2 />
                </div>
            </div>


        </div>
    </div>
  );
};

export default User2;
