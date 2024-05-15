import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamper } from '../../api/api';
import CamperList from '../../components/CamperList/CamperList';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.camper.campers);
  const isLoading = useSelector(state => state.camper.isLoading);
  const error = useSelector(state => state.camper.error);
  const [filters, setFilters] = useState({
    location: '',
    equipment: [],
    type: '',
  });
  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(fetchCamper({ page, limit }));
  }, [dispatch, page]);

  const handleFilterChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prevFilters => ({
        ...prevFilters,
        equipment: checked
          ? [...prevFilters.equipment, value]
          : prevFilters.equipment.filter(eq => eq !== value),
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
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
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="Kitchen"
              checked={filters.equipment.includes('Kitchen')}
              onChange={handleFilterChange}
            />
            Kitchen
          </label>
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="Shower"
              checked={filters.equipment.includes('Shower')}
              onChange={handleFilterChange}
            />
            Shower
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="Motorhome"
              checked={filters.type === 'Motorhome'}
              onChange={handleFilterChange}
            />
            Motorhome
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Campervan"
              checked={filters.type === 'Campervan'}
              onChange={handleFilterChange}
            />
            Campervan
          </label>
        </div>
      </div>
      <CamperList campers={campers} />
      <div>
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Catalog;
