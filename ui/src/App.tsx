import './App.css';

import { Button } from '@nextui-org/react';
import { Link, Route, Routes } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import HomePage from '@/components/HomePage';
import Users from '@/components/Users';
import { Button as ShadButton } from './components/ui/button';

function App() {
  return (
    <>
      <nav>
        <Button>Click me</Button>
        <ShadButton>Click Me</ShadButton>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
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
