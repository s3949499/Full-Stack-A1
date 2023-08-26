import React from 'react';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='profile-Container'>


      <div className='profile-details'>
        <h2>Profile</h2>
        <div className='userName'>
          <img className="profile-Icon" src="profileIcon.png" alt="displayed next to username"></img>
          <p className='userName-text'> {user.name}</p>
        </div>
        <p> {user.email}</p>
      </div>

    </div>
  );
}

export default Profile;