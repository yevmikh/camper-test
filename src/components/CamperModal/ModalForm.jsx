import DatePicker from 'react-datepicker';
import sprite from '../../image/icons/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import moduleCss from './camperModal.module.css';
import commonModuleCss from '../../common.module.css';

const ModalForm = ({ form, errors, handleSubmit, setForm }) => {
  const handleChange = ({ target: { name, value } }) => {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className={moduleCss.bookingForm}>
      <p
        className={`${moduleCss.modalFormBooking} ${commonModuleCss.detailsTitle}`}
      >
        Book your campervan now
      </p>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={moduleCss.bookingFormFlex} onSubmit={handleSubmit}>
        <label className={moduleCss.bookingFormInput}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={moduleCss.bookingFormDateWrapper}>
          <DatePicker
            selected={form.bookingDate}
            onChange={date => setForm({ ...form, bookingDate: date })}
            dateFormat="dd/MM/yyyy"
            placeholderText="Booking date"
            className={moduleCss.bookingFormDate}
            wrapperClassName={moduleCss.bookingFormDateWrapper}
            required
          />
          <svg className={moduleCss.bookingFormDateIcon}>
            <use href={`${sprite}#Button-20x20-calendar`} />
          </svg>
          {errors.bookingDate && (
            <p className={moduleCss.error}>{errors.bookingDate}</p>
          )}
        </label>
        <label>
          <textarea
            name="comment"
            placeholder="Comment"
            value={form.comment}
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          className={`${moduleCss.bookingFormButton} ${commonModuleCss.bookingFormButton}`}
          type="submit"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
