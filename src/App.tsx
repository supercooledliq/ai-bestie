import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './pages/LoginSignup';
import { ChatHistory } from './pages/ChatHistory';
import { Chat } from './pages/Chat';
import { Dashboard } from './pages/Dashboard';
import { Outfits } from './pages/Outfits';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/history" element={<ChatHistory />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/outfits" element={<Outfits />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
