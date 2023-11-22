"use client"
import React, {useEffect, useState} from 'react';
import backgroundPic from '../../../public/popbg1_01.jpg';
import Image from 'next/image';

export default function HeroSection({subDomain, twitchChannelName}) {

  console.log(process.env.NODE_ENV)
  console.log(twitchChannelName)

  return (
    <div className={`relative flex flex-col max-w-screen items-center min-h-screen w-full justify-center bg-cover bg-center`} style={{backgroundImage: `url(${backgroundPic.src})`}}>
    <div className='absolute inset-0 w-full h-full bg-black bg-opacity-70 z-0' />
    <div className='flex w-full flex-col items-center z-10'>
    {/* <h1 className='text-8xl font-quattrocento text-white' >Halo Theme</h1>
    <div className='flex flex-col gap-2 text-center'>
      <h2 className='text-3xl text-indigo-500'>Get my content on these platforms!</h2>
      <div className='flex flex-col gap-2'>
        <a className='border-2 border-white text-white p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>YouTube</a>
        <a className='border-2 border-white text-white p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Twitch</a>
        <a className='border-2 border-white text-white p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Instagram</a>
        <a className='border-2 border-white text-white p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Facebook</a>
        <a className='border-2 border-white text-white p-4 rounded' href='https://www.youtube.com/channel/UC3qQYFb4Z6A4k8ZyXVz2zOQ' target='_blank' rel='noreferrer'>Twitter</a>
      </div>
    </div> */}
      <div className='w-full rounded-[100px] px-12 h-[calc(100vh-200px)] overflow-hidden flex'>
        <iframe
          src={process.env.NODE_ENV === "development" ? `https://player.twitch.tv/?channel=${twitchChannelName}&parent=localhost` : `https://player.twitch.tv/?channel=${twitchChannelName}&parent=${subDomain}.streamy.pro`}
          className='w-full h-full'
          allowFullScreen>
        </iframe>
        <iframe 
          src={process.env.NODE_ENV === "development" ? `https://www.twitch.tv/embed/${twitchChannelName}/chat?darkpopout&parent=localhost` : `https://www.twitch.tv/embed/${twitchChannelName}/chat?darkpopout&parent=${subDomain}.streamy.pro` }
          className='w-[400px] h-full'
          >
        </iframe>
      </div>
    </div>
    
  </div>
    )
  }