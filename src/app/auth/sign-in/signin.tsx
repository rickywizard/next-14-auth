'use client';

import { FcGoogle } from 'react-icons/fc';
import { handleGoogleSignIn } from '@/src/lib/auth/googleSignInServerAction';
import React, { startTransition, useState, useTransition } from 'react';
import { handleEmailSignIn } from '@/src/lib/auth/emailSignInServerAction';

export const SignInPage = () => {
  const [isPending, setIsPending] = useTransition();
  const [formData, setFormData] = useState({ email: '' as string });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      startTransition(async () => {
        await handleEmailSignIn(formData.email);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Sign In</h2>
        <div className="form-container">
          <form className="email-signin-form" onSubmit={handleSubmit}>
            <input
              className="form-input"
              maxLength={320}
              type="email"
              placeholder="example@email.com"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({ email: e.target.value });
              }}
              disabled={isPending}
              required
            />
            <button className="submit-button" type="submit">
              Sign in with email
            </button>
          </form>

          <div className="divider">
            <div className="line"></div>
            <div className="or">or</div>
            <div className="line"></div>
          </div>

          <div className="social-logins">
            <button className="google" onClick={() => handleGoogleSignIn()}>
              <FcGoogle className="google-icon" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
