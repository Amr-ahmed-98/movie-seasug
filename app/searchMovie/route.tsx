type DataType = {
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
  imdbRating: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Trailer?: string;
};
interface Data {
  (title: string): Promise<DataType>;
}
//-------------- search for movies---------------------------
export const searchedData: Data = async (title) => {
  const searchedTitles = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${title}`
  );
  const data = await searchedTitles.json();
  return data;
};

// --------------- id for movies----------------
export const getMovieId = async (title: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${process.env.API_KEY_FOR_TRAILERS}`
  );
  const data = await response.json();
  if (data.results[0]) {
    return data.results[0].id;
  } else {
    return null;
  }
};
// ---------- get movie ---------------
export const getMovieTrailer = async (movieId: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY_FOR_TRAILERS}`
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
