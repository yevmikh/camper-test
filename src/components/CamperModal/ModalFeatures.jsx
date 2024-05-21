import moduleCss from './camperModal.module.css';
import commonModuleCss from '../../common.module.css';
import sprite from '../../image/icons/sprite.svg';

const ModalFeatures = ({ details }) => {
  const {
    adults,
    transmission,
    engine,
    details: { airConditioner, kitchen, beds, CD, radio, hob },
  } = details;

  return (
    <div>
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
        {airConditioner && (
          <li className={commonModuleCss.formItem}>
            <svg className={moduleCss.icon}>
              <use href={`${sprite}#ac`} />
            </svg>
            AC
          </li>
        )}
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
              <use href={`${sprite}#air_conditioner`} />
            </svg>
            air conditioner
          </li>
        )}
        {CD && (
          <li className={commonModuleCss.formItem}>
            <svg className={moduleCss.icon}>
              <use href={`${sprite}#cd`} />
            </svg>
            CD
          </li>
        )}
        {radio && (
          <li className={commonModuleCss.formItem}>
            <svg className={moduleCss.icon}>
              <use href={`${sprite}#radio`} />
            </svg>
            radio
          </li>
        )}
        {hob && (
          <li className={commonModuleCss.formItem}>
            <svg className={moduleCss.icon}>
              <use href={`${sprite}#hob`} />
            </svg>
            {hob} hob
          </li>
        )}
      </ul>
    </div>
  );
};

export default ModalFeatures;
