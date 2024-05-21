import moduleCss from './camperModal.module.css';

const ModalImageContainer = ({ images, alt }) => (
  <div className={moduleCss.modalImgContainer}>
    {images.slice(0, 3).map((image, index) => (
      <img key={index} src={image} alt={alt} className={moduleCss.modalImg} />
    ))}
  </div>
);

export default ModalImageContainer;
