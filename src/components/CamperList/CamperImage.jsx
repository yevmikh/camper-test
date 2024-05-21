import moduleCss from './camperList.module.css';

const CamperImage = ({ src, alt }) => (
  <div className={moduleCss.camperImgBox}>
    <img className={moduleCss.camperImg} src={src} alt={alt} />
  </div>
);

export default CamperImage;
