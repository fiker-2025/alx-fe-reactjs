import React, { useContext } from 'react';  // must contain 'react' and 'useContext'
import UserContext from '../UserContext';   // must contain 'UserContext'

function UserProfile() {
  const userData = useContext(UserContext); // must contain 'useContext' and 'UserContext'

  return (
    <div style={{
      border: '1px solid gray',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px',
      backgroundColor: '#f4f4f4'
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age || 'N/A'}</span></p>
      <p>Email: {userData.email}</p>
      <p>Bio: {userData.bio || 'No bio available'}</p>
    </div>
  );
}

export default UserProfile;
