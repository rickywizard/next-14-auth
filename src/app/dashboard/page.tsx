import { DashboardPage } from '@/src/app/dashboard/dashboard';
import { checkIsAuthenticated } from '@/src/lib/auth/checkIsAuthenticated';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  // const isAuthenticated = false; // testing
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <DashboardPage />;
  }
};

export default Dashboard;
