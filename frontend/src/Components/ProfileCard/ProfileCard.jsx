import React from 'react';
import './ProfileCard.scss';

const ProfileCard = ({ name, username, followers, followings }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <img src="../../profile.jpg" alt={name} className="profile-picture"/><br />
        <h3 className="profile-name">{name}<span>Rishav Raj Kumar</span></h3>
        <p className="profile-username">{username}<span>rishav4101</span></p>
      </div>
      <div className="profile-card-stats">
        <div className="profile-card-stat1">
          {followers}
          <span><span>20 </span>Followers</span>
        </div>
        <div className="profile-card-stat2">
          {followings}
          <span><span>20 </span>Following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

