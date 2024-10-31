import { RxCheckCircled } from 'react-icons/rx';

const AuthSuccessPage = () => {
  return (
    <div className="auth-success-page">
      <div className="auth-success-card">
        <div className="auth-success">
          <RxCheckCircled className="icon" />

          <p>Success! Please check your email inbox for sign in link</p>
        </div>
        <div>
          <p>
            {
              "Didn't receive an email? To go back to the sign-in page and try again, "
            }
            <a href="/api/auth/signin" className="back-signin-button">
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessPage;
