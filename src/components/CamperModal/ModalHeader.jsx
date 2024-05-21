import sprite from '../../image/icons/sprite.svg';
import moduleCss from './camperModal.module.css';
import commonModuleCss from '../../common.module.css';

const ModalHeader = ({ name, onClose }) => (
  <div>
    <button className={moduleCss.closeButton} onClick={onClose}>
      <svg className={moduleCss.icon}>
        <use href={`${sprite}#rating`} />
      </svg>
    </button>
    <h2
      className={`${moduleCss.modalFormHeader} ${commonModuleCss.formHeader}`}
    >
      {name}
    </h2>
  </div>
);

export default ModalHeader;
