import {createBrowserHistory} from "history";
export const history = createBrowserHistory();

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const unique = (arr) => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

const renameProperty = (obj, fromKey, toKey) => {
  obj[toKey] = obj[fromKey];
  delete obj[fromKey];
};

export const movieCardAdapter = (apiCard) => {
  renameProperty(apiCard, `poster_image`, `img`);
  renameProperty(apiCard, `background_image`, `movieBG`);
  renameProperty(apiCard, `preview_video_link`, `src`);
  renameProperty(apiCard, `released`, `movieYear`);
  renameProperty(apiCard, `scores_count`, `movieRatingCount`);
  renameProperty(apiCard, `video_link`, `srcFullVideo`);
  renameProperty(apiCard, `preview_image`, `imgPrev`);
  renameProperty(apiCard, `run_time`, `duration`);
  renameProperty(apiCard, `is_favorite`, `isFavorite`);
  renameProperty(apiCard, `background_color`, `BGColor`);
  return apiCard;
};

export const dataAdapter = (films) => {
  return films.map((it) => movieCardAdapter(it));
};

export const noop = () => {};
