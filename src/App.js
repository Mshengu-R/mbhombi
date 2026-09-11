import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import BankPage from "./pages/BankPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import AboutUsPage from "./pages/AboutUsPage";


function Protected({ children }) { const { token } = useAuth(); return token ? children : <Navigate to="/login" replace />; }
export default function App() {
  const { token } = useAuth();
  return <Routes>
    
    <Route path="/login" element={token ? <Navigate to="/" replace /> : <LoginPage />} />
    <Route path="/signup" element={token ? <Navigate to="/" replace /> : <SignupPage />} />
    <Route path="/" element={<Protected><Layout /></Protected>}>
      <Route index element={<HomePage />} />
      <Route path="bank" element={<BankPage />} />
      <Route path="bank/create" element={<CreateAccountPage />} />
      <Route path="messages" element={<MessagesPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="about" element={<AboutUsPage />} />
    </Route>
    <Route path="*" element={<Navigate to={token ? "/" : "/login"} replace />} />
  </Routes>;
}
