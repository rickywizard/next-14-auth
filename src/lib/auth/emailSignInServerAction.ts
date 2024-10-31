'use server';

import { signIn } from '@/src/lib/auth/authConfig';

export const handleEmailSignIn = async (email: string) => {
  try {
    // console.log('email sign in');
    await signIn('nodemailer', { email, callbackUrl: '/dashboard' });
  } catch (error) {
    throw error;
  }
};
