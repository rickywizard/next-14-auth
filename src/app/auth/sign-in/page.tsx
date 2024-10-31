import { redirect } from 'next/navigation';
import { SignInPage } from '@/src/app/auth/sign-in/signin';
import { checkIsAuthenticated } from '@/src/lib/auth/checkIsAuthenticated';

const SignIn = async () => {
  // const isAuthenticated = false; // testing
  const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect('/dashboard');
  } else {
    return <SignInPage />;
  }
};

export default SignIn;
