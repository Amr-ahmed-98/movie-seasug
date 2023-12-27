'use client';
import Link from 'next/link';
import Button from '@/components/Button';

const MainPage = () => {
  return (
    <div>
      <Link href='/SearchPage'>
        <Button
          className='w-40 h-12 rounded bg-white text-lg absolute btn-search left-96 bottom-52 max-xlg:left-96 max-xlg:bottom-56 max-lg:left-52 max-lg:bottom-52  max-md:left-52 max-md:bottom-52 max-sm:left-32 max-sm:bottom-56  '
          text='Search For a Movie'
        />
      </Link>
      <Link href='/SuggestPage'>
        <Button
          className='w-40 h-12 absolute bg-white rounded btn-suggest right-96 bottom-52 max-xlg:right-52 max-xlg:bottom-56 max-lg:right-52 max-lg:bottom-52 max-md:right-10 max-md:bottom-52 max-sm:right-5 max-sm:bottom-56'
          text='Suggest me a movie'
        />
      </Link>
    </div>
  );
};

export default MainPage;
