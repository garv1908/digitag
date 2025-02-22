import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import imgg from '../../assets/logo.webp';
import { initAuth } from './auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    initAuth();
    navigate('/marketplace');
  };
  

  return (
    <div className="min-h-screen flex">  
      {/* Left side - Logo */}
      <div className="w-1/2 bg-[#0466C8] flex items-center justify-center">
        <div className="text-white text-center">
          <img src={imgg} alt="DigiTag Logo" className="w-70 mx-auto mb-4" />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-96">
          <h2 className="text-2xl font-bold text-center mb-8">Member Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-12"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-12"
                required
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              LOGIN
            </button>
            <div className="text-center">
              <a
                href="https://internetcomputer.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0466C8] hover:underline"
              >
                Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
