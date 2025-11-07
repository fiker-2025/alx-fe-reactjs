import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      
      <UserProfile 
        name="Alice" 
        age={28} 
        bio="I love traveling and coding." 
      />
      <UserProfile 
        name="Bob" 
        age={32} 
        bio="I enjoy photography and coffee." 
      />

      <Footer />
    </>
  );
}

export default App;
