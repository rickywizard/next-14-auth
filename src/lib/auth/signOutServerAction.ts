'use server';

import { signOut } from '@/src/lib/auth/authConfig';

export const handleSignOut = async () => {
  try {
    // console.log('Sign Out');
    await signOut();
  } catch (error) {
    throw error;
  }
};
