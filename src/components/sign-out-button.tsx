'use client';

import { handleSignOut } from '@/src/lib/auth/signOutServerAction';

export const SignOutButton = (props: {
  children?: React.ReactNode;
  classname?: string;
}) => {
  return (
    <button className={props.classname} onClick={() => handleSignOut()}>
      {props.children || 'Sign Out'}
    </button>
  );
};
