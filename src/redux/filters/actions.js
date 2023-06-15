import { SEARCHBOOK, STATUSCHANGED } from './actionTypes';

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: {
      status,
    },
  };
};

export const searchBook = (searchTerm) => {
  return {
    type: SEARCHBOOK,
    payload: {
      searchTerm,
    },
  };
};
