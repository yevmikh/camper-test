import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/index'));
const Catalog = lazy(() => import('../pages/Catalog/index'));
const Favorites = lazy(() => import('../pages/Favorites/index'));
const Error = lazy(() => import('../pages/Error/index'));

export { Home, Catalog, Favorites, Error };
