'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useContext } from 'react';

import { IoMdArrowRoundBack } from 'react-icons/io';
import UserDataContext from '../contexts/UserDataContext';
import { useRouter } from 'next/navigation';

const SuggestPage = () => {
  // ------------------ States ----------------
  const [genre, setGenre] = useState<string>('');
  const [actdir, setActdir] = useState<string>('');
  const [lenMovie, setLenMovie] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [ageRate, setAgeRate] = useState<string>('');
  const [movieRate, setMovieRate] = useState<string>('');

  const { userData } = useContext(UserDataContext);
  const router = useRouter();

  // ------------------ Handle Change ---------------
  const genreHandel = (e: any) => {
    setGenre(e.target.value);
  };

  const actdirHandel = (e: any) => {
    setActdir(e.target.value);
  };

  const lenMovieHandel = (e: any) => {
    setLenMovie(e.target.value);
  };

  const yearHandler = (e: any) => {
    setYear(e.target.value);
  };

  const ageRateHandler = (e: any) => {
    setAgeRate(e.target.value);
  };

  const movieRateHandler = (e: any) => {
    setMovieRate(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!genre || !lenMovie || !year || !ageRate || !movieRate) return;
    else {
      router.push('/ResultPage');
    }

    userData.push(genre, actdir, lenMovie, year, ageRate, movieRate);
  };

  return (
    <div className='suggest-page min-h-screen'>
      <Link href='/'>
        <IoMdArrowRoundBack className='text-white text-4xl absolute left-[5%] top-[5%] cursor-pointer' />
      </Link>
      <h1 className='text-5xl text-center  text-white pt-8'>Suggest A Movie</h1>
      <div className='card  card-side bg-base-100  lg:mx-96 edit-card mt-10 '>
        <figure>
          <Image
            src='/assets/images/movies.jpg'
            alt='background movies'
            width={300}
            height={200}
            className='h-full figure-hidden '
          />
        </figure>
        <div className='card-body text-center'>
          <h2 className='card-title font-bold text-3xl justify-center edit-title'>
            fill the form and get your movie
          </h2>
          {/* --------  Genre --------- */}
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'> Choose the Genre</span>
            </div>
            <select
              className='select select-bordered  w-full max-w-xs '
              required
              value={genre}
              onChange={genreHandel}
            >
              <option disabled selected value=''>
                Genre
              </option>
              <option value='28'>Action</option>
              <option value='16'>Animation</option>
              <option value='35'>Comedy</option>
              <option value='80'>Crime</option>
              <option value='18'>Drama</option>
              <option value='14'>Fantasy</option>
              <option value='36'>Historical</option>
              <option value='27'>Horror</option>
              <option value='10749'>Romance</option>
              <option value='878'>Science Fiction</option>
              <option value='53'>Thriller</option>
              <option value='37'>Western</option>
              <option value='99'>Documentary</option>
            </select>
          </label>
          {/* --------  Actor/Director --------- */}
          <label className='form-control w-full max-w-xs mt-2'>
            <div className='label'>
              <span className='label-text'>
                who is your favourite Actor or Director <br /> (note that you
                can leave it empty)
              </span>
            </div>
            <input
              type='text'
              placeholder='Actor/Director'
              className='input input-bordered w-full max-w-xs'
              value={actdir}
              onChange={actdirHandel}
            />
          </label>
          {/* --------  Length of the movie --------- */}
          <label className='form-control w-full max-w-xs mt-2'>
            <div className='label'>
              <span className='label-text'>
                Choose what the movie length do you want
              </span>
            </div>
            <select
              className='select select-bordered  w-full max-w-xs '
              value={lenMovie}
              onChange={lenMovieHandel}
            >
              <option disabled selected value=''>
                Length
              </option>
              <option value='Short'>Short</option>
              <option value='Long'>Long</option>
            </select>
          </label>
          {/* --------  Year of the movie --------- */}
          <label className='form-control w-full max-w-xs mt-2'>
            <div className='label'>
              <span className='label-text'>
                Choose the range of the year of the movie
              </span>
            </div>
            <select
              className='select select-bordered  w-full max-w-xs '
              value={year}
              onChange={yearHandler}
            >
              <option disabled selected value=''>
                Year
              </option>
              <option value='from 1990 to 2000'>from 1990 to 2000</option>
              <option value='from 2000 to 2010'>from 2000 to 2010</option>
              <option value='from 2010 to 2020'>from 2010 to 2020</option>
              <option value='from 2020 to 2023'>from 2020 to 2023</option>
            </select>
          </label>
          {/* --------  Age rating of the movie --------- */}
          <label className='form-control w-full max-w-xs mt-2'>
            <div className='label'>
              <span className='label-text'>
                Choose the age rating of the movie
              </span>
            </div>
            <select
              className='select select-bordered  w-full max-w-xs '
              value={ageRate}
              onChange={ageRateHandler}
            >
              <option disabled selected value=''>
                Rate
              </option>
              <option value='G'>G</option>
              <option value='PG'>PG</option>
              <option value='PG-13'>PG-13</option>
              <option value='R'>R</option>
              <option value='NC-17'>NC-17</option>
            </select>
          </label>
          {/* -------- Rating of the movie --------- */}
          <label className='form-control w-full max-w-xs mt-2 '>
            <div className='label'>
              <span className='label-text'>choose the rate of the movie</span>
            </div>
            <select
              className='select select-bordered  w-full max-w-xs '
              value={movieRate}
              onChange={movieRateHandler}
            >
              <option disabled selected value=''>
                the rate
              </option>
              <option value='from 1 to 5'>from 1 to 5</option>
              <option value='from 5 to 10'>from 5 to 10</option>
            </select>
          </label>
          {/* --------  Submit button --------- */}
          <div className='card-action justify-center mt-3 '>
            <button
              className='btn btn-outline'
              type='submit'
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestPage;
