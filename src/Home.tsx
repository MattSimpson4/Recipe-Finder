import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { supabase } from './supabaseClient';

export default function App() {
  const [mode, setMode] = useState<null | 'login' | 'signup'>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [signUp, setSignUp] = useState(false);
  const [login, setLogIn] = useState(false);

  const handleSubmit = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + '#/user',
      },
    });

    if (error) {
      console.error('Error during sign in:', error);
      setMessage('An error occurred. Please try again.');
    } else {
      setMessage(
        `Check your inbox for a link to ${mode === 'login' ? 'log in' : 'sign up'}.`
      );
      setEmail('');
      setMode(null);
      setSignUp(false);
      setLogIn(false);
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase.from('users').select('*');

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        console.log('Users:', data);
      }
    }
    fetchUsers();
  }, []);
  return (
    <>
      <div className="Homepage">
        <header className="Homepage-header">
          <h1>Welcome to Recipe Finder!</h1>
        </header>
        {mode === null && (
          <>
            <button
              onClick={() => {
                setMode('signup');
                setSignUp(true);
              }}
              className="sign-up-button"
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                setMode('login');
                setLogIn(true);
              }}
              className="log-in-button"
            >
              Log In
            </button>
          </>
        )}

        {mode != null && (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="submit-form"
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-email"
                required
              />
              <button type="submit" className="submit-button">
                {mode === 'login' ? 'Log In' : 'Sign Up'}
              </button>
              <button
                type="button"
                onClick={() => setMode(null)}
                className="cancel-button"
              >
                Cancel
              </button>
            </form>
          </>
        )}
        {message && <p className="status-message">{message}</p>}
      </div>
    </>
  );
}
