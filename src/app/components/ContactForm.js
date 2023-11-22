import React from 'react';

export default function ContactForm() {

  return (
    <form className='flex flex-col w-full gap-2 mb-10'>
      <input className='p-4 border-2 border-black' type="text" placeholder="Name" />
      <input className='p-4 border-2 border-black' type="email" placeholder="Email" />
      <textarea className='p-4 border-2 border-black' placeholder="Message"></textarea>
      <button className='py-4 px-10 border-2 border-black rounded-full'>Send Message</button>
    </form>
  )
}