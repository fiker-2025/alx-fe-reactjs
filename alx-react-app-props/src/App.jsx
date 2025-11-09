import ProfilePage from './ProfilePage';
import UserContext from './UserContext';  // ✅ must import

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>  {/* ✅ must use Provider + value */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
