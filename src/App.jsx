import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup/SignUpPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import ContactCenter from "./pages/ContactCenter/ContactCenter";
import Analytics from "./pages/Analytics/Analytics";
import Chatbot from "./pages/Chatbot/Chatbot";
import Setting from "./pages/Setting/Setting";
import Team from "./pages/Team/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact-center" element={<ContactCenter />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/chat-bot" element={<Chatbot />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
