export interface Comment {
  id: number,
  user: {
    id: number,
    name: string,
  }
  rating: number,
  comment: string,
  date: string,
}

export interface FilmCard {
  name: string,
  img: string,
  imgPrev: string,
  movieBG: string,
  BGColor: string,
  description: string,
  rating: number,
  movieRatingCount: number,
  director: string,
  starring: string[],
  duration: number,
  genre: string,
  movieYear: number,
  id: number | string,
  isFavorite: boolean,
  srcFullVideo: string,
  src: string,
}




