import { useNavigate } from 'react-router-dom';
import commonModuleCss from '../../common.module.css';
import moduleCss from './error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <section className={moduleCss.homeWrapper}>
      <div className={moduleCss.overlay}></div>
      <div className={moduleCss.homeContent}>
        <h1 className={moduleCss.homeTitle}>Ooops,something is wrong </h1>

        <button
          className={`${commonModuleCss.bookingFormButton} ${moduleCss.tripButton}`}
          onClick={handleButtonClick}
        >
          To Trip
        </button>
      </div>
    </section>
  );
};

export default Error;
