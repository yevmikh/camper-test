import InputWithLabel from '../../components/helpers/InputWithLabel';
import moduleCss from './catalog.module.css';
import commonModuleCss from '../../common.module.css';

const Filters = ({ filters, handleFilterChange }) => (
  <div>
    <div className={moduleCss.catalogSideFilters}>
      <InputWithLabel
        type="checkbox"
        id="airConditioner"
        name="details"
        value="airConditioner"
        checked={filters.details.includes('airConditioner')}
        onChange={handleFilterChange}
        label="AC"
        icon="ac"
      />
      <InputWithLabel
        type="checkbox"
        id="automatic"
        name="transmission"
        value="automatic"
        checked={filters.transmission.includes('automatic')}
        onChange={handleFilterChange}
        label="Automatic"
        icon="automatic"
      />
      <InputWithLabel
        type="checkbox"
        id="kitchen"
        name="details"
        value="kitchen"
        checked={filters.details.includes('kitchen')}
        onChange={handleFilterChange}
        label="Kitchen"
        icon="kitchen"
      />
      <InputWithLabel
        type="checkbox"
        id="TV"
        name="details"
        value="TV"
        checked={filters.details.includes('TV')}
        onChange={handleFilterChange}
        label="TV"
        icon="tv"
      />
      <InputWithLabel
        type="checkbox"
        id="shower"
        name="details"
        value="shower"
        checked={filters.details.includes('shower')}
        onChange={handleFilterChange}
        label="Shower/WC"
        icon="shower"
      />
    </div>
    <p className={commonModuleCss.detailsTitle}>Vehicle type</p>
    <div className={moduleCss.catalogSideVanWrapper}>
      <InputWithLabel
        type="radio"
        id="alcove"
        name="form"
        value="alcove"
        checked={filters.form.includes('alcove')}
        onChange={handleFilterChange}
        label="Alcove"
        icon="van_alcove"
      />
      <InputWithLabel
        type="radio"
        id="van"
        name="form"
        value="van"
        checked={filters.form.includes('van')}
        onChange={handleFilterChange}
        label="Van"
        icon="van"
      />
      <InputWithLabel
        type="radio"
        id="panelTruck"
        name="form"
        value="panelTruck"
        checked={filters.form.includes('panelTruck')}
        onChange={handleFilterChange}
        label="Camper"
        icon="camper"
      />
    </div>
  </div>
);

export default Filters;
