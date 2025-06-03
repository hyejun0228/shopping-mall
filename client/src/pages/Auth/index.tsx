import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from '../../components/Footer';
import AuthHeader from './AuthHeader';

function AuthPage() {
  return (
    <>
      <Suspense fallback={null}>
        <AuthHeader />
      </Suspense>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default AuthPage;
