import moduleCss from './camperList.module.css';
import commonModuleCss from '../../common.module.css';
import sprite from '../../image/icons/sprite.svg';

const CamperDetails = ({ rating, reviews, location }) => (
  <div className={`${moduleCss.modalFormPrice} ${commonModuleCss.formPrice}`}>
    <span>
      ⭐
      <span className={commonModuleCss.formRating}>
        {rating} ({reviews.length} Reviews)
      </span>
    </span>
    <div className={commonModuleCss.formRatingLoc}>
      <svg className={commonModuleCss.icon}>
        <use href={`${sprite}#map_pin`} />
      </svg>
      {location}
    </div>
  </div>
);

export default CamperDetails;
