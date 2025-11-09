import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // This is the userData object
  const userData = {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
    bio: "Loves hiking and photography"
  };

  // Provide userData to all child components
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
