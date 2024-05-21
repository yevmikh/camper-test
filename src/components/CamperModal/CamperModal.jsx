import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/camperSlice';
import moduleCss from './camperModal.module.css';
import ModalHeader from './ModalHeader';
import ModalTabs from './ModalTabs';
import ModalPriceRating from './ModalPriceRating';
import ModalImageContainer from './ModalImageContainer';
import ModalFeatures from './ModalFeatures';
import ModalDetails from './ModalDetails';
import ModalReviews from './ModalReviews';
import ModalForm from './ModalForm';
import Loader from '../Loader/Loader';
import { selectIsLoading } from '../../store/selectors';

const CamperModal = ({ camper }) => {
  const dispatch = useDispatch();
  const modalRoot = document.getElementById('modal-root');
  const isLoading = useSelector(selectIsLoading);
  const [form, setForm] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('features');

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!form.bookingDate) {
      errors.bookingDate = 'Booking date is required';
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (form.bookingDate < today) {
        errors.bookingDate = 'Booking date cannot be in the past';
      }
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleClose();
    }
  };

  return createPortal(
    <div className={moduleCss.backdrop} onClick={handleBackdropClick}>
      <div className={moduleCss.modal}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ModalHeader name={camper.name} onClose={handleClose} />
            <ModalPriceRating
              price={camper.price}
              rating={camper.rating}
              reviews={camper.reviews}
              location={camper.location}
            />
            <div className={moduleCss.tabContent}>
              <ModalImageContainer images={camper.gallery} alt={camper.name} />
              <p className={moduleCss.modalFormDescription}>
                {camper.description}
              </p>
              <ModalTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className={moduleCss.descriptionFlex}>
                {activeTab === 'features' ? (
                  <div className={moduleCss.modalFormFeatures}>
                    <ModalFeatures details={camper} />
                    <ModalDetails details={camper} />
                  </div>
                ) : (
                  <ModalReviews reviews={camper.reviews} />
                )}
                <ModalForm
                  form={form}
                  errors={errors}
                  handleSubmit={handleSubmit}
                  setForm={setForm}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    modalRoot
  );
};

export default CamperModal;
