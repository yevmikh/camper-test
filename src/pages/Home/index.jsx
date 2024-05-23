import { useNavigate } from 'react-router-dom';
import moduleCss from './home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/catalog');
  };

  return (
    <section className={moduleCss.homeWrapper}>
      <div className={moduleCss.overlay}></div>
      <div className={moduleCss.homeContent}>
        <h1 className={moduleCss.homeTitle}>Enjoy Your Trip</h1>
        <h2 className={moduleCss.homeAnotation}>
          Our fleet includes a variety of camper models, from compact vans for
          solo travelers to spacious motorhomes for families. Each vehicle is
          meticulously maintained and regularly serviced to guarantee your
          safety and comfort.
        </h2>
        <button className={moduleCss.tripButton} onClick={handleButtonClick}>
          To travel
        </button>
      </div>
    </section>
  );
};

export default Home;
