import { AdminPage } from '@/src/app/admin/admin';
import { getUserRole } from '@/src/lib/auth/getUserRoleServerAction';
import { redirect } from 'next/navigation';

const Admin = async () => {
  const role = await getUserRole();

  if (role === 'ADMIN') {
    return <AdminPage />;
  } else {
    redirect('/dashboard');
  }
};

export default Admin;
