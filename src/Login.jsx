import React, { useState } from 'react';

const Login = ({ onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loggingIn');
    
    setTimeout(() => {
    
      if (email === 'user@wlinks.com' && password === 'password') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  const getStatusMessage = () => {
    if (status === 'loggingIn') return 'Verifying credentials...';
    if (status === 'success') return 'Login Successful! Redirecting...';
    if (status === 'error') return 'Login Failed. Invalid email or password.';
    return 'Enter your details to continue.';
  };

  const isFormDisabled = status === 'loggingIn' || status === 'success';

  return (
    <>
      <style jsx="true">{`
        :root {
          --primary-orange: #ff7e00;
          --dark-background: #1c1c1c;
          --light-text: #f0f0f0;
          --accent-gray: #a0a0a0;
        }

        .login-page {
          min-height: 90.20vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(rgba(28, 28, 28, 0.8), rgba(28, 28, 28, 0.8)), url('https://img.freepik.com/free-vector/black-background-with-wavy-lines_52683-76524.jpg?semt=ais_hybrid&w=740&q=80'); 
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: var(--dark-background); 
        }

        .login-card {
          background-color: #2c2c2c; 
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          width: 90%;
          max-width: 400px;
          text-align: center;
        }

        .login-card h2 {
          color: var(--primary-orange);
          margin-bottom: 2rem;
          font-size: 2rem;
          font-weight: 800;
        }

        .input-group {
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--accent-gray);
        }

        .input-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #444;
          border-radius: 6px;
          background-color: #383838;
          color: var(--light-text);
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .input-group input:focus {
          outline: none;
          border-color: var(--primary-orange);
        }
        
        .status-message {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            min-height: 1.5rem;
            color: var(--accent-gray);
        }

        .status-message.success {
            color: #4CAF50;
            font-weight: 700;
        }

        .status-message.error {
            color: #f44336;
            font-weight: 700;
        }
        
        .login-button-submit {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          background-color: var(--primary-orange);
          color: var(--dark-background);
          border: none;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.1s;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        }

        .login-button-submit:hover:not(:disabled) {
          background-color: #ff9933;
          transform: translateY(-1px);
        }

        .login-button-submit:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .back-link {
            display: block;
            margin-top: 1.5rem;
            color: var(--primary-orange);
            text-decoration: none;
            cursor: pointer;
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h2>Login</h2>
          <div className={`status-message ${status}`}>{getStatusMessage()}</div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isFormDisabled}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isFormDisabled}
                required
              />
            </div>
            <button 
              type="submit" 
              className="login-button-submit" 
              disabled={isFormDisabled}
            >
              {status === 'loggingIn' ? 'Verifying...' : 'Login'}
            </button>
          </form>
          <span className="back-link" onClick={onBackToHome}>
            ← Back to Home Page
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
