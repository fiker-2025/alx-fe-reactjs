import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#e0f7fa' }}>
      <UserProfile name="Alice" age={25} bio="Loves hiking and traveling to new cities." />
      <UserProfile name="Bob" age={30} bio="Enjoys photography and exploring local food spots." />
      <UserProfile name="Charlie" age={28} bio="Tech enthusiast who loves learning new frameworks." />
    </main>
  );
}

export default MainContent;
