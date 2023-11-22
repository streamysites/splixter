import React from 'react';

export default function Footer() {
  return (
    <div className='flex h-[250px] bg-black w-full'>
      <div className='flex flex-col w-full items-center justify-center py-4'>
        <h1 className='text-6xl uppercase text-white font-quattrocento'>Halo Theme</h1>
        <a className='text-white' href="https://streamy.pro">Powered by Streamy</a>
      </div>
    </div>
  )
}
