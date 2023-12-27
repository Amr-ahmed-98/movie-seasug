'use client';

import { useContext, useEffect, useState } from 'react';
import UserDataContext from '../contexts/UserDataContext';
import { actorId, suggestedMovie } from '../api/route';
import { IoMdArrowRoundBack } from 'react-icons/io';

import Link from 'next/link';

let releaseYear: string;
let rateMovie: string;

interface dataProps {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}
const ResultPage = () => {
  const { userData } = useContext(UserDataContext);
  const [suggestedData, setSuggestedData] = useState<dataProps | null>(null);

  if ((userData[3]?.match('1990') ?? [])[0] === '1990') {
    releaseYear = Math.floor(
      Math.random() * (2000 - 1990 + 1) + 1990
    ).toString();
  } else if ((userData[3]?.match('2000') ?? [])[0] === '2000') {
    releaseYear = Math.floor(
      Math.random() * (2010 - 2000 + 1) + 2000
    ).toString();
  } else if ((userData[3]?.match('2010') ?? [])[0] === '2010') {
    releaseYear = Math.floor(
      Math.random() * (2020 - 2010 + 1) + 2010
    ).toString();
  } else if ((userData[3]?.match('2020') ?? [])[0] === '2020') {
    releaseYear = Math.floor(
      Math.random() * (2023 - 2020 + 1) + 2020
    ).toString();
  }

  if ((userData[5]?.match('1') ?? [])[0] === '1') {
    rateMovie = 'Bad';
  } else if ((userData[5]?.match('10') ?? [])[0] === '10') {
    rateMovie = 'Good';
  }
  useEffect(() => {
    const fetchedData = async () => {
      await suggestedMovie(
        userData[0],
        userData[2],
        releaseYear,
        userData[4],
        rateMovie
      );
      if (userData[1] === '') {
        const result = await suggestedMovie(
          userData[0],
          userData[2],
          releaseYear,
          userData[4],
          rateMovie
        );
        localStorage.setItem('theMovieData', JSON.stringify(result.data));
        let value = JSON.parse(localStorage.getItem('theMovieData') || '{}');

        setSuggestedData(value);
      } else {
        if (userData[1]) {
          const actor = await actorId(
            userData[1]
              .split(' ')
              .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
              })
              .join(' ')
          );
          await suggestedMovie(
            userData[0],
            userData[2],
            releaseYear,
            userData[4],
            rateMovie,
            actor
          );
          const result = await suggestedMovie(
            userData[0],
            userData[2],
            releaseYear,
            userData[4],
            rateMovie,
            actor
          );
          localStorage.setItem('theMovieData', JSON.stringify(result.data));
          let value = JSON.parse(localStorage.getItem('theMovieData') || '{}');
          setSuggestedData(value);
        }
      }
    };
    fetchedData();
  }, [userData]);

  useEffect(() => {
    const fetchedData = () => {
      const storedData = localStorage.getItem('theMovieData');
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setSuggestedData(parsedData);
        } catch (error) {
          console.error('error parsing JSON:', error);
          localStorage.removeItem('theMovieData');
        }
      }
    };
    fetchedData();
  }, []);

  const removeLocalStorage = () => {
    localStorage.removeItem('theMovieData');
  };

  useEffect(() => {
    const handlePopState = () => {
      localStorage.removeItem('theMovieData');
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
      <Link href='/SuggestPage' onClick={removeLocalStorage}>
        <IoMdArrowRoundBack className='text-white text-4xl absolute left-[5%] top-[5%] cursor-pointer' />
      </Link>
      <h1 className='text-3xl flex justify-center mt-10 '>We Suggest to you</h1>
      <div className='card lg:card-side bg-base-100 shadow-xl mt-32 '>
        <figure className='edit-image '>
          <img
            src={`https://image.tmdb.org/t/p/w500${suggestedData?.poster_path}`}
            alt='movie cover'
            className=' pb-5 h-[100%] '
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title pb-5'>{suggestedData?.title}</h2>
          <p>{suggestedData?.release_date}</p>
          <p>{suggestedData?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
