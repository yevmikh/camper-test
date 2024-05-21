import moduleCss from '../../pages/Catalog/catalog.module.css';
import sprite from '../../image/icons/sprite.svg';

const InputWithLabel = ({
  type,
  id,
  name,
  value,
  checked,
  onChange,
  label,
  icon,
}) => (
  <div className={moduleCss.catalogSideGroup}>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={moduleCss.checkboxInput}
    />
    <label
      htmlFor={id}
      className={`${moduleCss.checkboxLabel} ${
        checked ? moduleCss.active : ''
      }`}
    >
      <div className={moduleCss.checkboxSquare}>
        <svg
          className={
            type === 'radio'
              ? moduleCss.catalogInputIconVan
              : moduleCss.catalogInputIcon
          }
        >
          <use href={`${sprite}#${icon}`} />
        </svg>
      </div>
      <p className={moduleCss.catalogSideP}>{label}</p>
    </label>
  </div>
);

export default InputWithLabel;
