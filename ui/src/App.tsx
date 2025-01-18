import './App.css';

import { Route, Routes } from 'react-router-dom';
import LoginPage from '@/app/login/LoginPage';
import SignupForm from '@/components/SignupForm';
import HomePage from '@/app/home/HomePage';
import NavBar from '@/components/navbar';
import Users from '@/app/users/Users';
import NotYetImplemented from '@/app/notyetimplemented/NotYetImplemented';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/forgot-password" element={<NotYetImplemented />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
