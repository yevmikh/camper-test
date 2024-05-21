import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggleFavorite, openModal } from '../../store/camperSlice';
import {
  selectError,
  selectIsLoading,
  selectFavorites,
  selectModalCamper,
} from '../../store/selectors';
import CamperCard from './CamperCard';
import CamperModal from '../CamperModal/CamperModal';
import Loader from '../Loader/Loader';
import moduleCss from './camperList.module.css';
import noCampersImage from '../../image/stop.png';

const CamperList = ({ campers }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);
  const modalCamper = useSelector(selectModalCamper);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id));
    const searchParams = new URLSearchParams(location.search);
    let favoriteIds = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];

    if (favoriteIds.length > 0) {
      searchParams.set('favorites', favoriteIds.join(','));
    } else {
      searchParams.delete('favorites');
    }

    navigate({ search: searchParams.toString() });
  };

  const handleShowMore = camper => {
    dispatch(openModal(camper));
  };

  useEffect(() => {}, [campers, favorites]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!campers.length)
    return (
      <div className={moduleCss.noCampersContainer}>
        <img
          src={noCampersImage}
          alt="No campers"
          className={moduleCss.noCampersImage}
        />

        <p className={moduleCss.noCampersText}>
          Sorry, no campers found with the selected filters.
        </p>
      </div>
    );

  return (
    <div className={moduleCss.camper}>
      {campers.map(camper => (
        <CamperCard
          key={camper._id}
          camper={camper}
          isFavorite={favorites.includes(camper._id)}
          onToggleFavorite={handleToggleFavorite}
          onShowMore={handleShowMore}
        />
      ))}
      {modalCamper && <CamperModal camper={modalCamper} />}
    </div>
  );
};

export default CamperList;
