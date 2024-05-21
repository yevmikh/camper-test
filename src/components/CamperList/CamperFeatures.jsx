import moduleCss from './camperList.module.css';
import commonModuleCss from '../../common.module.css';
import sprite from '../../image/icons/sprite.svg';

const CamperFeatures = ({ details, adults, transmission, engine }) => {
  const { kitchen, beds, airConditioner } = details;

  return (
    <ul className={commonModuleCss.formFeaturesCard}>
      <li className={commonModuleCss.formItem}>
        <svg className={moduleCss.icon}>
          <use href={`${sprite}#adults`} />
        </svg>
        {adults} adults
      </li>
      <li className={commonModuleCss.formItem}>
        <svg className={moduleCss.icon}>
          <use href={`${sprite}#automatic`} />
        </svg>
        {transmission}
      </li>
      <li className={commonModuleCss.formItem}>
        <svg className={moduleCss.icon}>
          <use href={`${sprite}#petrol`} />
        </svg>
        {engine}
      </li>
      {kitchen && (
        <li className={commonModuleCss.formItem}>
          <svg className={moduleCss.icon}>
            <use href={`${sprite}#kitchen`} />
          </svg>
          kitchen
        </li>
      )}
      {beds && (
        <li className={commonModuleCss.formItem}>
          <svg className={moduleCss.icon}>
            <use href={`${sprite}#beds`} />
          </svg>
          {beds} beds
        </li>
      )}
      {airConditioner && (
        <li className={commonModuleCss.formItem}>
          <svg className={moduleCss.icon}>
            <use href={`${sprite}#ac`} />
          </svg>
          AC
        </li>
      )}
    </ul>
  );
};

export default CamperFeatures;
