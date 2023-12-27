'use client';
import { getMovieId, getMovieTrailer, searchedData } from '@/app/api/route';
import { useEffect, useState } from 'react';
import { FaImdb } from 'react-icons/fa';
import { SiRottentomatoes } from 'react-icons/si';

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
interface Props {
  form_title: string;
}

const MovieList = ({ form_title }: Props) => {
  const [data, setData] = useState<DataType | null>(null);
  const [trailer, setTrailer] = useState<string>(String);
  useEffect(() => {
    searchedData(form_title).then((data) => {
      setData({
        Poster: data?.Poster,
        Title: data?.Title,
        Year: data?.Year,
        Plot: data?.Plot,
        imdbRating: data?.imdbRating,
        Ratings: data?.Ratings,
      });
    });
  }, [form_title]);
  useEffect(() => {
    getMovieId(form_title).then((movieId) => {
      getMovieTrailer(movieId).then((trailer) => {
        for (let i in trailer) {
          if (trailer[i]?.key && trailer[i]?.name.includes('Trailer')) {
            setTrailer(`https://www.youtube.com/watch?v=${trailer[i]?.key}`);
          }
        }
      });
    });
  });
  let rottenTomatoesRating;
  if (data?.Ratings) {
    rottenTomatoesRating = data?.Ratings.find(
      (rating) => rating.Source === 'Rotten Tomatoes'
    )?.Value;
  }

  return (
    data &&
    Object.values(data).some((value) => value !== undefined) && (
      <div className='card glass w-96  mt-5 ml-[35%] max-sm:ml-[10%] max-md:ml-[15%]'>
        <figure>
          <img src={data?.Poster} alt='image poster' className='w-48 rounded' />
        </figure>
        <div className='card-body '>
          <h2 className='card-title'>{data?.Title}</h2>
          <div className='text-white bg-black w-10 '>{data?.Year}</div>
          <p>{data?.Plot}</p>
          <div className='flex items-center gap-1 text-3xl'>
            Rating:
            <FaImdb className='text-yellow-300 text-5xl' alt='imdb rate' />
            {data?.imdbRating}
            <SiRottentomatoes
              className='text-red-500 text-5xl ml-2'
              alt='rotten tomatoes rate'
            />
            {rottenTomatoesRating}
          </div>
          <div className='card-actions justify-center'>
            <button
              className='btn btn-error text-white'
              onClick={() => window.open(trailer)}
            >
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
