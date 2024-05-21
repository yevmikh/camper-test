import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setFavoritesFromStorage } from './camperSlice';

const useInitializeFavoritesFromUrl = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const favoritesFromUrl = searchParams.get('favorites');
    if (favoritesFromUrl) {
      const favoriteIds = favoritesFromUrl.split(',');
      dispatch(setFavoritesFromStorage(favoriteIds));
    }
  }, [location.search, dispatch]);
};

export default useInitializeFavoritesFromUrl;
