'use server';

import { signIn } from '@/src/lib/auth/authConfig';

export const handleGoogleSignIn = async () => {
  try {
    // console.log('google sign in');
    await signIn('google', {
      redirectTo: '/dashboard',
    });
  } catch (error) {
    throw error;
  }
};
