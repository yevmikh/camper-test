import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MainLayout;
