import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/index';
import { Home, Catalog, Favorites, Error } from '../api/lazy';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};
