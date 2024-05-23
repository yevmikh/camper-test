import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CamperList from '../../components/CamperList/CamperList';
import useInitializeFavoritesFromUrl from '../../store/favoriteSlice';
import {
  selectCampers,
  selectFavorites,
  selectIsLoading,
  selectError,
} from '../../store/selectors';
import Loader from '../../components/Loader/Loader';
import commonModuleCss from '../../common.module.css';
import moduleCss from './favorites.module.css';

const Favorites = () => {
  useInitializeFavoritesFromUrl();

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  const favorites = useSelector(selectFavorites);
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const favoriteCampers = campers.filter(({ _id }) => favorites.includes(_id));

  useEffect(() => {
    if (error) {
      navigate('/error');
    }
  }, [error, navigate]);

  if (isLoading) return <Loader />;
  if (!favoriteCampers.length)
    return (
      <div className={moduleCss.noCampersContainer}>
        <h1 className={moduleCss.noCampersText}>Garage is empty</h1>
        <button
          className={`${commonModuleCss.bookingFormButton} ${moduleCss.tripButton}`}
          onClick={handleButtonClick}
        >
          To travel
        </button>
      </div>
    );

  return (
    <div className={moduleCss.container}>
      <CamperList campers={favoriteCampers} />
    </div>
  );
};

export default Favorites;
