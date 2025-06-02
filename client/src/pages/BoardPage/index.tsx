
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function BoardPage() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default BoardPage;
