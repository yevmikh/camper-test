import React from 'react';
import { useSelector } from 'react-redux';

const CamperList = ({ campers }) => {
  const isLoading = useSelector(state => state.camper.isLoading);
  const error = useSelector(state => state.camper.error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {campers.map(camper => (
        <div key={camper._id}>{camper.name}</div>
      ))}
    </div>
  );
};

export default CamperList;
