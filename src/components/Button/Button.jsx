import moduleCss from './button.module.css';
import commonModuleCss from '../../common.module.css';
import moduleCamperCss from '../../components/CamperList/camperList.module.css';

export const Button = ({ onClick, children }) => (
  <button className={moduleCss.catalogLoadMoreButton} onClick={onClick}>
    {children}
  </button>
);

export const CamperButton = ({ onClick }) => (
  <div className={moduleCamperCss.camperButtonWraper}>
    <button
      className={`${moduleCamperCss.camperFormButton} ${commonModuleCss.bookingFormButton}`}
      onClick={onClick}
    >
      Show more
    </button>
  </div>
);
