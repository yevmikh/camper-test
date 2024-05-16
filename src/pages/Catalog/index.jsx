import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../api/api';
import CamperList from '../../components/CamperList/CamperList';
import { Link, useLocation } from 'react-router-dom';
import { selectCampers, selectIsLoading, selectError } from 'store/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [filters, setFilters] = useState({
    location: '',
    details: [],
    form: '',
    transmission: '',
  });
  const limit = 4;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;

  useEffect(() => {
    dispatch(fetchCamper({ page, limit, filters }));
  }, [dispatch, page, filters.form, filters.location]);

  const handleFilterChange = e => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => {
      const newFilters = { ...prev };

      if (type === 'checkbox') {
        if (name === 'transmission') {
          newFilters.transmission = checked ? value : '';
        } else {
          newFilters.details = checked
            ? [...prev.details, value]
            : prev.details.filter(detail => detail !== value);
        }
      } else if (type === 'radio') {
        newFilters.form = value;
      } else {
        newFilters[name] = value;
      }

      return newFilters;
    });
  };

  const handleSearch = () => {
    dispatch(fetchCamper({ page, limit, filters }));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
          onKeyDown={handleKeyDown}
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="details"
              value="kitchen"
              checked={filters.details.includes('kitchen')}
              onChange={handleFilterChange}
            />
            Kitchen
          </label>
          <label>
            <input
              type="checkbox"
              name="details"
              value="airConditioner"
              checked={filters.details.includes('airConditioner')}
              onChange={handleFilterChange}
            />
            AC
          </label>
          <label>
            <input
              type="checkbox"
              name="transmission"
              value="automatic"
              checked={filters.transmission === 'automatic'}
              onChange={handleFilterChange}
            />
            Automatic Transmission
          </label>
          <label>
            <input
              type="checkbox"
              name="details"
              value="shower"
              checked={filters.details.includes('shower')}
              onChange={handleFilterChange}
            />
            Shower
          </label>
          <label>
            <input
              type="checkbox"
              name="details"
              value="TV"
              checked={filters.details.includes('TV')}
              onChange={handleFilterChange}
            />
            TV
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="form"
              value="alcove"
              checked={filters.form === 'alcove'}
              onChange={handleFilterChange}
            />
            Alcove
          </label>
          <label>
            <input
              type="radio"
              name="form"
              value="van"
              checked={filters.form === 'van'}
              onChange={handleFilterChange}
            />
            Van
          </label>
          <label>
            <input
              type="radio"
              name="form"
              value="panelTruck"
              checked={filters.form === 'panelTruck'}
              onChange={handleFilterChange}
            />
            Panel Truck
          </label>
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <CamperList campers={campers} />
      <div>
        <Link
          to={`?page=${Math.max(page - 1, 1)}`}
          className={page === 1 ? 'disabled' : ''}
        >
          Previous
        </Link>
        <Link to={`?page=${page + 1}`}>Next</Link>
      </div>
    </div>
  );
};

export default Catalog;
