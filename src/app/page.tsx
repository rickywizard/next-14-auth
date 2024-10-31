import React from 'react';
import { SignInButton } from '@/src/components/sign-in-button';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <div>
        <SignInButton className="signin-button" />
      </div>
    </div>
  );
};

export default Home;
