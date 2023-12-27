'use client';
import MainPage from '@/app/MainPage';
import UserDataContext from './contexts/UserDataContext';
import { useState } from 'react';

export default function Home() {
  const [userData, setUserData] = useState<string[]>([]);
  return (
    <main className=' '>
      <div className='flex justify-center items-center h-screen pl-44 -translate-y-24  max-sm:-translate-x-14'>
        <h1 className='text-white text-6xl mt-24  max-sm:text-5xl '>
          Movie SeaSug
        </h1>
        <UserDataContext.Provider value={{ userData }}>
          <MainPage />
        </UserDataContext.Provider>
      </div>
    </main>
  );
}
