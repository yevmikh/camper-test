import sprite from '../../image/icons/sprite.svg';
import moduleCss from './camperModal.module.css';
import commonModuleCss from '../../common.module.css';

const ModalPriceRating = ({ price, rating, reviews, location }) => {
  const reviewCount = reviews.length;

  return (
    <div>
      <div
        className={`${moduleCss.modalFormPrice} ${commonModuleCss.formPrice}`}
      >
        <span>
          ⭐
          <span className={commonModuleCss.formRating}>
            {rating} ({reviewCount} Reviews)
          </span>
        </span>
        <div className={commonModuleCss.formRatingLoc}>
          <svg className={commonModuleCss.icon}>
            <use href={`${sprite}#map_pin`} />
          </svg>
          {location}
        </div>
      </div>
      <h2
        className={`${moduleCss.modalFormHeader} ${commonModuleCss.formHeader}`}
      >
        €{price.toFixed(2)}
      </h2>
    </div>
  );
};

export default ModalPriceRating;
