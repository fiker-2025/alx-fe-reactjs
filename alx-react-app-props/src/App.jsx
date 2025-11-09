import ProfilePage from './ProfilePage';
import UserContext from './UserContext';  // ✅ must import

function App() {
  const userData = { 
    name: "Jane Doe", 
    age: 25,
    email: "jane.doe@example.com",
    bio: "Loves hiking and photography"
  };

  return (
    <UserContext.Provider value={userData}>  {/* ✅ Provider + value */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
