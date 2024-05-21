import moduleCss from './camperList.module.css';
import commonModuleCss from '../../common.module.css';
import sprite from '../../image/icons/sprite.svg';

const CamperTitle = ({ name, price, isFavorite, onToggleFavorite }) => (
  <div className={moduleCss.camperTitle}>
    <h2 className={commonModuleCss.formHeader}>{name}</h2>
    <div className={moduleCss.camperTitleHeartGroup}>
      <h2 className={commonModuleCss.formHeader}>€{price.toFixed(2)}</h2>
      <button
        className={moduleCss.transparentButton}
        onClick={onToggleFavorite}
      >
        <svg
          className={`${moduleCss.iconDef} ${isFavorite ? moduleCss.red : ''}`}
        >
          <use href={`${sprite}#heart`} />
        </svg>
      </button>
    </div>
  </div>
);

export default CamperTitle;
