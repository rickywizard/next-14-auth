import { RxExclamationTriangle } from 'react-icons/rx';

const AuthErrorPage = () => {
  return (
    <div className="auth-error-page">
      <div className="auth-error-card">
        <div className="auth-error">
          <RxExclamationTriangle className="icon" />

          <p>Oops, something went wrong</p>
        </div>
        <div>
          <p>
            {'To go back to the sign in page, '}
            <a href="/api/auth/signin" className="back-signin-button">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;
