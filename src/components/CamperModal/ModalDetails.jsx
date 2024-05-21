import moduleCss from './camperModal.module.css';

const ModalDetails = ({ details }) => (
  <div>
    <p className={moduleCss.modalDetailsTitle}>Vehicle details</p>
    <ul className={moduleCss.modalDetails}>
      <li className={moduleCss.modalDetailsItem}>
        <span>Form:</span> <span>{details.form}</span>
      </li>
      <li className={moduleCss.modalDetailsItem}>
        <span>Length:</span> <span>{details.length}</span>
      </li>
      <li className={moduleCss.modalDetailsItem}>
        <span>Width:</span> <span>{details.width}</span>
      </li>
      <li className={moduleCss.modalDetailsItem}>
        <span>Height:</span> <span>{details.height}</span>
      </li>
      <li className={moduleCss.modalDetailsItem}>
        <span>Tank:</span> <span>{details.tank}</span>
      </li>
      <li className={moduleCss.modalDetailsItem}>
        <span>Consumption:</span> <span>{details.consumption}</span>
      </li>
    </ul>
  </div>
);

export default ModalDetails;
