import Link from 'next/link';

const not_found = () => {
  return (
    <div className='bg-black min-h-screen flex justify-center items-center'>
      <div className='text-white text-3xl '>
        there is no page like that here
      </div>
      <Link
        href='/'
        className='text-black absolute bottom-72 text-xl h-7 w-20 bg-white text-center '
      >
        Go Back
      </Link>
    </div>
  );
};

export default not_found;
