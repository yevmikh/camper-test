import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/selectors';

const CamperList = ({ campers }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!campers.length)
    return <p>No campers found with the selected filters.</p>;

  return (
    <div>
      {campers.map(camper => (
        <div
          key={camper._id}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
        >
          <h2>{camper.name}</h2>
          <img src={camper.gallery[0]} alt={camper.name} width="400" />
          <p>{camper.description}</p>
          <p>Rating: {camper.rating} / 5</p>
          <p>Price: ${camper.price}</p>
          <p>Location: {camper.location}</p>
          <p>Transmission: {camper.transmission}</p>
          <p>Petrol: {camper.engine}</p>
          <p>Kitchen: {camper.details.kitchen}</p>
          <p>Shower: {camper.details.shower}</p>
          <p>Bed: {camper.details.beds}</p>
          <p>AC: {camper.details.airConditioner}</p>
        </div>
      ))}
    </div>
  );
};

export default CamperList;
