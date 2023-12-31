export const actorId = async (name: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.API_KEY_FOR_TRAILERS}&query=${name}`
    );
    const data = await response.json();
    return data.results[0].id;
  } catch {
    return '';
  }
};

export const suggestedMovie = async (
  genre: string,
  movieLen: string,
  year: string,
  ageRate: string,
  movieRate: string,
  actor?: number
) => {
  const isShortOrLong = () => {
    if (movieLen === 'Short') {
      return 'with_runtime.lte=40';
    } else if (movieLen === 'Long') {
      {
        return 'with_runtime.gte=40';
      }
    }
  };

  const isGoodOrBad = () => {
    if (movieRate === 'Good') {
      return 'vote_average.gte=5';
    } else if (movieRate === 'Bad') {
      {
        return 'vote_average.lte=5';
      }
    }
  };

  const totalPageResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&with_cast=${actor}&${isShortOrLong()}&primary_release_year=${year}&certification=${ageRate}&certification_country=US&with_original_language=en&${isGoodOrBad()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzVlYTkzOGZjYzY2NzVjNGIyZDdhN2U3YzNhODE4MiIsInN1YiI6IjY1NjlmMTBiZDA0ZDFhMDEyZWI5ZTA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ewYktCM3Ow1_Ak5wEo1eLaRkZvMIqkynLI-q5LyAgAc`,
      },
    }
  );
  const totalPageData = await totalPageResponse.json();
  const totalPages = totalPageData.total_pages;
  const page = Math.floor(Math.random() * totalPages) + 1;
  if (totalPages > 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?&page=${page}&with_genres=${genre}&with_cast=${actor}&${isShortOrLong()}&primary_release_year=${year}&certification=${ageRate}&certification_country=US&with_original_language=en&${isGoodOrBad()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzVlYTkzOGZjYzY2NzVjNGIyZDdhN2U3YzNhODE4MiIsInN1YiI6IjY1NjlmMTBiZDA0ZDFhMDEyZWI5ZTA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ewYktCM3Ow1_Ak5wEo1eLaRkZvMIqkynLI-q5LyAgAc`,
        },
      }
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return {
        data: data.results[0],
      };
    } else {
      return {
        data: null,
      };
    }
  } else {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?&page=1&with_genres=${genre}&with_cast=${actor}&${isShortOrLong()}&primary_release_year=${year}&certification=${ageRate}&certification_country=US&with_original_language=en&${isGoodOrBad()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzVlYTkzOGZjYzY2NzVjNGIyZDdhN2U3YzNhODE4MiIsInN1YiI6IjY1NjlmMTBiZDA0ZDFhMDEyZWI5ZTA1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ewYktCM3Ow1_Ak5wEo1eLaRkZvMIqkynLI-q5LyAgAc`,
        },
      }
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return {
        data: data.results[0],
      };
    } else {
      return {
        data: null,
      };
    }
  }
};
