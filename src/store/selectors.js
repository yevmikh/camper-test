import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.camper.campers;
export const getFilters = state => state.camper.filters;
export const selectIsLoading = state => state.camper.isLoading;
export const selectError = state => state.camper.error;

export const getFilteredCampers = createSelector(
  [selectCampers, getFilters],
  (campers, filters) => {
    const { form, transmission, details, location } = filters;

    return campers.filter(camper => {
      return (
        (!form || camper.form === form) &&
        (!transmission || camper.transmission === transmission) &&
        (!details.length ||
          details.every(detail => camper.details.includes(detail))) &&
        (!location ||
          camper.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
  }
);
