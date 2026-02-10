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
        .login-page {
          min-height: 89vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-card {
          background: rgba(34, 34, 34, 0.7);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          width: 100%;
          max-width: 400px;
          color: white;
          text-align: center;
          border: 1px solid rgba(255, 126, 0, 0.2);
        }

        .login-card h2 {
          margin-bottom: 10px;
          color: var(--primary-orange);
          font-size: 2rem;
        }

        .status-message {
          margin-bottom: 25px;
          font-size: 0.9rem;
          padding: 10px;
          border-radius: 5px;
        }

        .status-message.error { color: #ff4444; background: rgba(255, 68, 68, 0.1); }
        .status-message.success { color: #00c851; background: rgba(0, 200, 81, 0.1); }
        .status-message.loggingIn { color: var(--primary-orange); }

        .input-group {
          margin-bottom: 20px;
          text-align: left;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.9rem;
          color: var(--accent-gray);
        }

        .input-group input {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #444;
          background: rgba(42, 42, 42, 0.8);
          color: white;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .input-group input:focus {
          border-color: var(--primary-orange);
          box-shadow: 0 0 8px rgba(255, 126, 0, 0.3);
        }

        .login-button-submit {
          width: 100%;
          padding: 14px;
          background: var(--primary-orange);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.6);
          font-weight: bold;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
          transition: background 0.3s, transform 0.2s, box-shadow 0.2s;
          margin-top: 10px;
        }

        .login-button-submit:hover:not(:disabled) {
          background: #e67200;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
        }

        .login-button-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .back-link {
          display: block;
          margin-top: 20px;
          color: var(--accent-gray);
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.3s;
        }

        .back-link:hover {
          color: var(--primary-orange);
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
