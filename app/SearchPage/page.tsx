'use client';
import { useState } from 'react';
import { FaSearch } from '../../node_modules/react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import MovieList from '@/components/MovieList';
import Button from '@/components/Button';
import Link from 'next/link';

const SearchPage = () => {
  const [title, setTitle] = useState('');
  const titleHandler = (e: any) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className='search-page min-h-screen'>
      <Link href='/'>
        <IoMdArrowRoundBack className='text-white text-4xl absolute left-[5%] top-[5%] cursor-pointer' />
      </Link>
      <h1 className='text-white text-3xl w-full text-center pt-10 pr-3'>
        Search For A Movie
      </h1>
      <form
        className='flex justify-center pt-10 gap-5 items-center'
        onSubmit={submitHandler}
      >
        <input
          type='text'
          className='w-96 h-7 rounded outline-none pl-1 text-xl'
          value={title}
          onChange={titleHandler}
          placeholder='put the name of the movie'
        />
        <Button
          text={<FaSearch />}
          className=' w-12 h-7 bg-white text-black outline-none rounded  pl-4 font-bold hover:bg-black hover:text-white hover:transition '
          type='submit'
        />
      </form>
      <MovieList form_title={title} />
    </div>
  );
};

export default SearchPage;
