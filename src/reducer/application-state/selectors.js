import NameSpace from "../name-space.js";

export const getGenre = (state) => {
  return state[NameSpace.APPLICATION_STATE].genre;
};

export const getFilmCards = (state) => {
  return state[NameSpace.APPLICATION_STATE].filmCards;
};

export const getFilmsToShow = (state) => {
  return state[NameSpace.APPLICATION_STATE].filmsToShow;
};

export const getTabToShow = (state) => {
  return state[NameSpace.APPLICATION_STATE].tabIsShowing;
};

export const getServerAvailability = (state) => {
  return state[NameSpace.APPLICATION_STATE].serverIsAvailable;
};
