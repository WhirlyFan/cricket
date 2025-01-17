import './App.css';

import { Route, Routes } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import HomePage from '@/components/HomePage';
import { ModeToggle } from '@/components/mode-toggle';
import NavBar from '@/components/ui/navbar';
import Users from '@/components/Users';

function App() {
  return (
    <>
      <div className="fixed bottom-2 left-2 z-50">
        <ModeToggle />
      </div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
